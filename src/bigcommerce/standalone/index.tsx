import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { createRoot } from "react-dom/client";
import { SDK } from "../../sdk";

const DESTINATION_ELEMENT = "#checkoutShippingAddress";

// Ensures React-based forms in the host page detect programmatic updates
function setFormControlValue(element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, value: string) {
  const tagName = element.tagName;

  if (tagName === "INPUT") {
    const input = element as HTMLInputElement;
    if (input.type === "checkbox" || input.type === "radio") {
      const checkedSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "checked")?.set;
      const boolValue = value === "true" || value === "on" || value === "1";
      checkedSetter ? checkedSetter.call(input, boolValue) : (input.checked = boolValue);
    } else {
      const valueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
      valueSetter ? valueSetter.call(input, value) : (input.value = value);
    }
  } else if (tagName === "TEXTAREA") {
    const textarea = element as HTMLTextAreaElement;
    const valueSetter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value")?.set;
    valueSetter ? valueSetter.call(textarea, value) : (textarea.value = value);
  } else if (tagName === "SELECT") {
    const select = element as HTMLSelectElement;
    const valueSetter = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, "value")?.set;
    valueSetter ? valueSetter.call(select, value) : (select.value = value);
  }

  // Fire events so any React/Vue listeners update state
  element.dispatchEvent(new Event("input", { bubbles: true }));
  element.dispatchEvent(new Event("change", { bubbles: true }));
}

export interface MasterFFLContextType {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  values: {
    postalCode: string;
    acceptTerms: boolean;
  };
  setValues: (values: { postalCode: string; acceptTerms: boolean }) => void;
  selectedDealer: any;
  setSelectedDealer: (selectedDealer: any) => void;
  error: string | null;
  setError: (error: string | null) => void;
  isFFL: boolean;
  isSuppressor: boolean;
}
const MasterFFLContext = createContext<MasterFFLContextType>({} as MasterFFLContextType);

const useMasterFFL = () => {
  const context = useContext(MasterFFLContext);

  if (!context) {
    throw new Error("useMasterFFL must be used within a MasterFFLProvider");
  }

  return context;
};

const MasterFFLProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [values, setValues] = useState({
    postalCode: "",
    acceptTerms: false,
  });
  const [selectedDealer, setSelectedDealer] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isFFL, setIsFFL] = useState(false);
  const [isSuppressor, setIsSuppressor] = useState(false);

  const handleInit = async () => {
    const { postalCode, acceptTerms, selectedDealer } = SDK.getSession(SDK.getConfig().checkoutId);

    if (postalCode) setValues((p) => ({ ...p, postalCode: postalCode }));
    if (acceptTerms) setValues((p) => ({ ...p, acceptTerms: acceptTerms }));
    if (selectedDealer && selectedDealer !== "null") setSelectedDealer(JSON.parse(selectedDealer));

    const { isFFL, isSuppressor } = await SDK.init();
    setIsFFL(isFFL);
    setIsSuppressor(isSuppressor);
  };

  useEffect(() => {
    handleInit();
  }, []);

  const providerValues = useMemo(() => {
    return {
      isModalOpen,
      setIsModalOpen,
      values,
      setValues,
      selectedDealer,
      setSelectedDealer,
      error,
      setError,
      isFFL,
      isSuppressor,
    };
  }, [isModalOpen, setIsModalOpen, values, setValues, selectedDealer, setSelectedDealer, error, setError, isFFL, isSuppressor]);

  return <MasterFFLContext.Provider value={providerValues}>{children}</MasterFFLContext.Provider>;
};

const MasterFFL = () => {
  return (
    <MasterFFLProvider>
      <MasterFFLForm />
      <MasterFFlScript />
      <MasterFFLModal />
    </MasterFFLProvider>
  );
};

const MasterFFlScript = () => {
  useEffect(() => {
    const hasScript = document.querySelector(`script[src^="${SDK.getConfig().sdkUrl}"]`);

    if (hasScript) {
      return;
    }

    const script = document.createElement("script");

    script.src = SDK.getConfig().sdkUrl;

    document.body.appendChild(script);
  }, [SDK.getConfig().sdkUrl]);

  return null;
};

const MasterFFLModal = () => {
  const { isModalOpen, setIsModalOpen, values, isSuppressor, setSelectedDealer } = useMasterFFL();
  const SELECTOR_ID = "ffSelectFrame";

  const dealerSelectionCallback = async (selectedDealer: any) => {
    if (!selectedDealer) return;

    const { shippingData, dealer } = await SDK.saveDealer(SDK.getConfig().checkoutId, selectedDealer);
    const address = shippingData.address;

    // update the shipping address fields
    Object.keys(address).forEach((key) => {
      const input = document.querySelector(`[name="shippingAddress.${key}"]`) as HTMLInputElement;
      if (input) {
        const nextValue = String(address[key as keyof typeof address] ?? "");
        setFormControlValue(input, nextValue);
      }
    });

    setSelectedDealer(dealer);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        const fflSelect = new (window.FFLSelectSDK as any).FFLDealerSelector(
          values.postalCode,
          SELECTOR_ID,
          { url: SDK.getConfig().baseUrl },
          {
            storeDomain: SDK.getConfig().storeDomain,
            envMode: SDK.getConfig().env,
            filters: isSuppressor ? "exclude_non_sot_dealer=true" : "",
            dealerSelectionCallback,
          }
        );

        fflSelect.show();
      }, 200);
    }
  }, [
    isModalOpen,
    values.postalCode,
    SDK.getConfig().baseUrl,
    SDK.getConfig().storeDomain,
    SDK.getConfig().env,
    dealerSelectionCallback,
    isSuppressor,
  ]);

  if (!isModalOpen) {
    return null;
  }

  const modalContent = (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `.ffl-modal-body { height: 100%; overflow: auto !important; padding: 0 !important; }`,
        }}
      />
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}
        onClick={() => setIsModalOpen(false)}
      >
        <div
          style={{
            maxWidth: "95%",
            width: "100%",
            height: "80dvh",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div id={SELECTOR_ID} className="ffl-modal-body" style={{ height: "100%", flex: 1 }} />
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
};

const MasterFFLForm = () => {
  const { values, setValues, selectedDealer, error, setIsModalOpen } = useMasterFFL();
  const [errors, setErrors] = useState({ postalCode: "", acceptTerms: "" });

  const observerRef = useRef<MutationObserver | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const billingObserverRef = useRef<MutationObserver | null>(null);

  const acceptTermsRef = useRef(false);
  const selectedDealerRef = useRef(false);

  useEffect(() => {
    acceptTermsRef.current = values.acceptTerms;
  }, [values.acceptTerms]);

  useEffect(() => {
    selectedDealerRef.current = !!selectedDealer;
  }, [selectedDealer]);

  const applyBillingSameAsShipping = useCallback(() => {
    const billingSameAsShipping = document.querySelector('input[type="checkbox"][name="billingSameAsShipping"]') as HTMLInputElement;
    if (!billingSameAsShipping) return;

    if (billingSameAsShipping && billingSameAsShipping.checked) {
      billingSameAsShipping.click();
    }
  }, []);

  useEffect(() => {
    const handleMutations = () => applyBillingSameAsShipping();

    billingObserverRef.current = new MutationObserver(handleMutations);
    billingObserverRef.current.observe(document.body, { childList: true, subtree: true });

    applyBillingSameAsShipping();

    return () => {
      if (billingObserverRef.current) {
        billingObserverRef.current.disconnect();
        billingObserverRef.current = null;
      }
    };
  }, [applyBillingSameAsShipping]);

  const applyDisabledState = useCallback(() => {
    const button = document.getElementById("checkout-shipping-continue") as HTMLButtonElement | null;

    if (!button) return;

    buttonRef.current = button;

    const isDisabled = !acceptTermsRef.current || !selectedDealerRef.current;

    if (button.disabled !== isDisabled) {
      button.disabled = isDisabled;
    }
  }, []);

  useEffect(() => {
    const parent = document.getElementById("checkout-shipping-continue")?.parentElement;

    if (!parent) return;

    const handleMutations = () => applyDisabledState();

    observerRef.current = new MutationObserver(handleMutations);
    observerRef.current.observe(parent, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["disabled", "class"],
    });

    applyDisabledState();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [applyDisabledState]);

  useEffect(() => {
    applyDisabledState();
  }, [applyDisabledState, values.acceptTerms, selectedDealer]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({ postalCode: "", acceptTerms: "" });

    if (e.target.name === "postalCode") {
      setValues({ ...values, postalCode: e.target.value });
      sessionStorage.setItem(`${SDK.getConfig().checkoutId}-postalCode`, e.target.value);
    } else {
      setValues({ ...values, acceptTerms: e.target.checked });
      sessionStorage.setItem(`${SDK.getConfig().checkoutId}-acceptTerms`, e.target.checked.toString());
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    setErrors({ postalCode: "", acceptTerms: "" });

    if (!values.postalCode) {
      setErrors({ ...errors, postalCode: `${SDK.getConfig().lang.postalCodeLabel} is required` });

      return;
    }

    setIsModalOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div
      className="form-body"
      style={{
        border: "1px solid #ebebeb",
        padding: "1.5rem",
        marginBottom: "15px",
        borderRadius: "4px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "15px",
        }}
      >
        <div className={`form-field ${errors.postalCode ? "form-field--error" : ""}`} style={{ flex: 1, marginBottom: 0 }}>
          <h3 style={{ fontSize: 18, margin: "0 0 15px 0" }}>{SDK.getConfig().lang.heading}</h3>
          <p style={{ fontWeight: 600 }}>{SDK.getConfig().lang.subheading}</p>

          <label className="form-label optimizedCheckout-form-label" htmlFor="postalCode">
            {SDK.getConfig().lang.postalCodeLabel} <span style={{ color: "red" }}>*</span>
          </label>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
            <input
              className="form-input optimizedCheckout-form-input"
              id="postalCode"
              name="postalCode"
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder=""
              type="text"
              value={values.postalCode}
            />
            <div style={{ flexShrink: 0 }}>
              <button onClick={handleSubmit} style={{ margin: 0 }} className="button button--primary optimizedCheckout-buttonPrimary">
                {SDK.getConfig().lang.buttonText}
              </button>
            </div>
          </div>
          {errors.postalCode && (
            <ul className="form-field-errors">
              <li className="form-field-error">
                <label aria-live="polite" className="form-inlineMessage" htmlFor="postalCode" role="alert">
                  {errors.postalCode}
                </label>
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className={`form-field-agreement form-field ${errors.acceptTerms ? "form-field--error" : ""}`} style={{ marginTop: 15 }}>
        <input
          checked={values.acceptTerms}
          className="form-checkbox optimizedCheckout-form-checkbox"
          id="accept-agreement"
          name="acceptTerms"
          onChange={handleInputChange}
          type="checkbox"
        />
        <label className="form-label optimizedCheckout-form-label" htmlFor="accept-agreement">
          {SDK.getConfig().lang.termsLabel}
        </label>
        {errors.acceptTerms && (
          <ul className="form-field-errors">
            <li className="form-field-error">
              <label aria-live="polite" className="form-inlineMessage" htmlFor="acceptTerms" role="alert">
                {errors.acceptTerms}
              </label>
            </li>
          </ul>
        )}
      </div>

      {error && (
        <div className="form-field form-field--error">
          <ul className="form-field-errors">
            <li className="form-field-error">
              <label aria-live="polite" className="form-inlineMessage" htmlFor="error" role="alert">
                {error}
              </label>
            </li>
          </ul>
        </div>
      )}

      {selectedDealer && (
        <div style={{ marginTop: 15 }}>
          <div className="form-body">
            <strong>{SDK.getConfig().lang.selectedDealerLabel}</strong>
            <div className="text-pretty">{selectedDealer?.name}</div>
            <div className="text-pretty">
              <span className="block">{selectedDealer?.contact.address.street1} </span>
              <span>
                {selectedDealer?.contact.address.city}, <span>{selectedDealer?.contact.address.state}</span>
              </span>
              <span> {selectedDealer?.contact.address.zip}</span>
            </div>
          </div>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            #checkoutShippingAddress, #sameAsBilling, #sameAsBilling + label { display: none; }
            `,
        }}
      />
    </div>
  );
};

export const renderMasterFFL = () => {
  (window as any).__masterfflScriptManager = (window as any).__masterfflScriptManager || {};
  if ((window as any).__masterfflScriptManager.initialized) return;
  (window as any).__masterfflScriptManager.initialized = true;

  const returnToShipping = () => {
    const selectedDealer = SDK.getSession(SDK.getConfig().checkoutId).selectedDealer;
    const acceptTerms = SDK.getSession(SDK.getConfig().checkoutId).acceptTerms;

    if (!selectedDealer || !acceptTerms) {
      const destination = document.querySelector(DESTINATION_ELEMENT);
      if (destination) return;

      const button = document.querySelector('.checkout-step--shipping [data-test="step-edit-button"]') as HTMLButtonElement;

      if (button) {
        button.click();
      }
    }
  };

  const mountIfReady = () => {
    const destination = document.querySelector(DESTINATION_ELEMENT);
    if (!destination) return false;

    let app = document.getElementById("bigc-masterffl-checkout");
    if (!app) {
      app = document.createElement("div");
      app.id = "bigc-masterffl-checkout";
      destination.insertAdjacentElement("beforebegin", app);
    }
    // Ensure container is positioned immediately before the destination element
    if (app.nextElementSibling !== destination) {
      destination.insertAdjacentElement("beforebegin", app);
    }

    // Avoid remounting if already mounted
    if (!(app as any)._root) {
      const root = createRoot(app);
      (app as any)._root = root;
      root.render(<MasterFFL />);
    }
    return true;
  };

  // Try immediate mount if element already exists
  mountIfReady();

  // Keep observing for re-renders/replacements of the destination container (throttled)
  let rafScheduled = false;
  const observer =
    (window as any).__masterfflScriptManager.observer ||
    new MutationObserver(() => {
      if (rafScheduled) return;
      rafScheduled = true;
      requestAnimationFrame(() => {
        rafScheduled = false;
        mountIfReady();
        returnToShipping();
      });
    });
  (window as any).__masterfflScriptManager.observer = observer;
  observer.observe(document.body, { childList: true, subtree: true });
};

renderMasterFFL();
