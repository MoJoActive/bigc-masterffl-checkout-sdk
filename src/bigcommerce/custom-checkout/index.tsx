import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { SDK } from "../../sdk";
import { CheckoutStepType, type CheckoutContextProps, type MasterFFLContextType } from "../../types";

const MasterFFLContext = createContext<MasterFFLContextType>({} as MasterFFLContextType);

export const useMasterFFL = () => {
  const context = useContext(MasterFFLContext);

  if (!context) {
    throw new Error("useMasterFFL must be used within a MasterFFLProvider");
  }

  return context;
};

export const MasterFFL = ({ checkoutContext, getCheckoutStepStatuses }: { checkoutContext: any; getCheckoutStepStatuses: any }) => {
  const { checkoutService, checkoutState } = useContext(checkoutContext) as CheckoutContextProps;
  const storeProfile = useMemo(() => checkoutState.data.getConfig()?.storeProfile, [checkoutState]);
  const checkoutId = useMemo(() => checkoutState.data.getCheckout()?.id, [checkoutState]);
  const storeHash = useMemo(() => storeProfile?.storeHash, [storeProfile]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [values, setValues] = useState({
    postalCode: "",
    acceptTerms: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [selectedDealer, setSelectedDealer] = useState<any>(null);
  const [isFFL, setIsFFL] = useState(false);
  const [isSuppressor, setIsSuppressor] = useState(false);

  useEffect(() => {
    // populate the values from the session storage on page load
    if (!checkoutId) return;

    const { postalCode, acceptTerms, selectedDealer } = SDK.getSession(checkoutId);

    if (postalCode) setValues((p) => ({ ...p, postalCode: postalCode }));
    if (acceptTerms) setValues((p) => ({ ...p, acceptTerms: acceptTerms }));
    if (selectedDealer && selectedDealer !== "null") setSelectedDealer(JSON.parse(selectedDealer));
  }, [checkoutId]);

  const config = useMemo(
    () => ({
      ...SDK.getConfig(),
      storeHash,
      checkoutId: checkoutState.data.getCheckout()?.id,
    }),
    [storeHash, checkoutState]
  );

  const handleSaveDealer = useCallback(
    async (dealer: any) => {
      // reset the selected dealer and error
      setSelectedDealer(null);
      setError(null);

      try {
        await SDK.saveDealer(checkoutId, dealer, true);
        await checkoutService.loadCheckout(checkoutId);

        // set the selected dealer and save to session storage
        setSelectedDealer(dealer);
      } catch (error) {
        setError("An error occurred while saving the dealer. Please try again.");
      }
    },
    [checkoutState, config, checkoutId, setSelectedDealer, setError, checkoutService]
  );

  const steps = useMemo(() => getCheckoutStepStatuses(checkoutState), [checkoutState]);

  useEffect(() => {
    // return the user back to the shipping step if they have not selected a dealer or accepted the terms yet
    // this can happen if the user refreshes the page or leaves and comes back to the checkout page
    // ensures the user selects a dealer and accepts the terms before they can proceed
    const activeStep = steps.find((step: any) => step.isActive);

    if (activeStep?.type !== CheckoutStepType.Shipping && (!selectedDealer || !values.acceptTerms)) {
      const button = document.querySelector('.checkout-step--shipping [data-test="step-edit-button"]') as HTMLButtonElement;

      if (button) {
        button.click();
      }
    }
  }, [steps, selectedDealer, values.acceptTerms]);

  const handleInit = useCallback(async () => {
    if (!config.storeHash || !checkoutState.data.getCart()) return;

    const { isFFL, isSuppressor } = await SDK.init();

    setIsFFL(isFFL);
    setIsSuppressor(isSuppressor);
  }, [config.storeHash, checkoutState.data.getCart()]);

  useEffect(() => {
    handleInit();
  }, [handleInit]);

  const contextValue = useMemo(
    () => ({
      checkoutService,
      checkoutState,
      config,
      isModalOpen,
      setIsModalOpen,
      values,
      setValues,
      handleSaveDealer,
      selectedDealer,
      error,
      isFFL,
      isSuppressor,
    }),
    [
      checkoutService,
      checkoutState,
      config,
      isModalOpen,
      setIsModalOpen,
      values,
      setValues,
      handleSaveDealer,
      selectedDealer,
      error,
      isFFL,
      isSuppressor,
    ]
  );

  return (
    <MasterFFLContext.Provider value={contextValue}>
      {(isFFL || isSuppressor) && (
        <>
          <MasterFFLForm />
          <MasterFFlScript />
          <MasterFFLModal />
        </>
      )}
    </MasterFFLContext.Provider>
  );
};

const MasterFFLForm = () => {
  const { setIsModalOpen, values, setValues, selectedDealer, config, error } = useMasterFFL();
  const [errors, setErrors] = useState({ postalCode: "", acceptTerms: "" });

  const observerRef = useRef<MutationObserver | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const acceptTermsRef = useRef(false);
  const selectedDealerRef = useRef(false);

  useEffect(() => {
    acceptTermsRef.current = values.acceptTerms;
  }, [values.acceptTerms]);

  useEffect(() => {
    selectedDealerRef.current = !!selectedDealer;
  }, [selectedDealer]);

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
      sessionStorage.setItem(`${config.checkoutId}-postalCode`, e.target.value);
    } else {
      setValues({ ...values, acceptTerms: e.target.checked });
      sessionStorage.setItem(`${config.checkoutId}-acceptTerms`, e.target.checked.toString());
    }
  };

  const handleSubmit = () => {
    setErrors({ postalCode: "", acceptTerms: "" });

    if (!values.postalCode) {
      setErrors({ ...errors, postalCode: `${config.lang.postalCodeLabel} is required` });

      return;
    }

    setIsModalOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
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
          <h3 style={{ fontSize: 18, margin: "0 0 15px 0" }}>{config.lang.heading}</h3>
          <p style={{ fontWeight: 600 }}>{config.lang.subheading}</p>

          <label className="form-label optimizedCheckout-form-label" htmlFor="postalCode">
            {config.lang.postalCodeLabel} <span style={{ color: "red" }}>*</span>
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
                {config.lang.buttonText}
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
          {config.lang.termsLabel}
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
            <strong>{config.lang.selectedDealerLabel}</strong>
            <div className="text-pretty">{selectedDealer?.name}</div>
            <div className="text-pretty">
              <span className="block">{selectedDealer?.contact.address.street1} </span>
              <span>
                {selectedDealer?.contact.address.city}, <span>{selectedDealer?.contact.address.state}</span>
              </span>
              <span> {selectedDealer?.contact.address.zip}</span>
            </div>
          </div>

          <style
            dangerouslySetInnerHTML={{
              __html: `
                #checkoutShippingAddress, #sameAsBilling, #sameAsBilling + label { display: none; }
                `,
            }}
          />
        </div>
      )}
    </div>
  );
};

const MasterFFlScript = () => {
  const { config } = useMasterFFL();

  useEffect(() => {
    const hasScript = document.querySelector(`script[src^="${config.sdkUrl}"]`);

    if (hasScript) {
      return;
    }

    const script = document.createElement("script");

    script.src = config.sdkUrl;

    document.body.appendChild(script);
  }, [config.sdkUrl]);

  return null;
};

const MasterFFLModal = () => {
  const { isModalOpen, setIsModalOpen, config, values, handleSaveDealer, isSuppressor } = useMasterFFL();

  const SELECTOR_ID = "ffSelectFrame";

  const dealerSelectionCallback = useCallback(
    async (dealer: any) => {
      if (!dealer) return;

      await handleSaveDealer(dealer);

      setIsModalOpen(false);
    },
    [handleSaveDealer, setIsModalOpen]
  );

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        const fflSelect = new (window.FFLSelectSDK as any).FFLDealerSelector(
          values.postalCode,
          SELECTOR_ID,
          { url: config.baseUrl },
          {
            storeDomain: config.storeDomain,
            envMode: config.env,
            filters: isSuppressor ? "exclude_non_sot_dealer=true" : "",
            dealerSelectionCallback,
          }
        );

        fflSelect.show();
      }, 200);
    }
  }, [isModalOpen, values.postalCode, config.baseUrl, config.storeDomain, config.env, dealerSelectionCallback, isSuppressor]);

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
          <button
            onClick={() => setIsModalOpen(false)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              zIndex: 1001,
            }}
          >
            ×
          </button>
          <div id={SELECTOR_ID} className="ffl-modal-body" style={{ height: "100%", flex: 1 }} />
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
};
