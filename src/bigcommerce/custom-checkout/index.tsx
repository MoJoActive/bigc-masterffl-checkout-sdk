import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { SDK } from "../../sdk";
import { CheckoutStepType, type CheckoutContextProps, type MasterFFLContextType } from "../../types";

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

  // Fire events so any React listeners update state
  element.dispatchEvent(new Event("input", { bubbles: true }));
  element.dispatchEvent(new Event("change", { bubbles: true }));
}

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
        await SDK.saveDealer(checkoutId, dealer);

        // set the selected dealer and save to session storage
        setSelectedDealer(dealer);
      } catch (error) {
        setError("An error occurred while saving the dealer. Please try again.");
      }
    },
    [checkoutId, checkoutService]
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

  const handleCleanup = useCallback(() => {
    if (!checkoutId) return;
    const previousDealer = sessionStorage.getItem(`${checkoutId}-selectedDealer`);
    if (previousDealer) {
      SDK.removeSession(checkoutId, "postalCode");
      SDK.removeSession(checkoutId, "acceptTerms");
      SDK.removeSession(checkoutId, "selectedDealer");

      // clear the address fields
      const addressFields = document.querySelectorAll('[name^="shippingAddress."]');
      addressFields.forEach((input) => {
        // Check the type of each Element before casting and using setFormControlValue
        if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement || input instanceof HTMLSelectElement) {
          const nextValue = String("");
          setFormControlValue(input, nextValue);
        }
      });
    }
  }, [checkoutId]);

  const handleInit = useCallback(async () => {
    if (!config.storeHash || !checkoutState.data.getCart()) return;

    const { isFFL, isSuppressor } = await SDK.init();

    setIsFFL(isFFL);
    setIsSuppressor(isSuppressor);

    if (!isFFL && !isSuppressor) {
      handleCleanup();
    }
  }, [config.storeHash, checkoutState.data.getCart(), handleCleanup]);

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
      setSelectedDealer,
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
      setSelectedDealer,
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
  const { setIsModalOpen, values, setValues, selectedDealer, config, error, isFFL, isSuppressor } = useMasterFFL();
  const [errors, setErrors] = useState({ postalCode: "", acceptTerms: "" });

  const observerRef = useRef<MutationObserver | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const billingObserverRef = useRef<MutationObserver | null>(null);
  const consignmentObserverRef = useRef<MutationObserver | null>(null);
  const mutationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const acceptTermsRef = useRef(false);
  const selectedDealerRef = useRef(false);
  const isMarkingConsignmentRef = useRef(false);

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

  const markFFLConsignment = useCallback(async () => {
    // Prevent re-entrant calls
    if (isMarkingConsignmentRef.current) return;
    isMarkingConsignmentRef.current = true;

    try {
      // Find all consignment containers first
      const containers = document.querySelectorAll(".consignment-container");

      if (containers.length === 0) {
        isMarkingConsignmentRef.current = false;
        return;
      }

      // Get the FFL consignment data from the API to match against DOM
      const checkoutId = config.checkoutId;
      if (!checkoutId) {
        isMarkingConsignmentRef.current = false;
        return;
      }

      // Get checkout with consignments to find the FFL one
      const response = await fetch(
        `/api/storefront/checkouts/${checkoutId}?include=consignments.lineItems.physicalItems%2Cconsignments.address`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        isMarkingConsignmentRef.current = false;
        return;
      }

      const checkout = await response.json();
      const consignments = checkout?.consignments || checkout?.data?.consignments || [];

      // Find the FFL consignment from API data
      let fflConsignment = null;
      let fflConsignmentId = null;

      // Match by selected dealer address if available (most reliable)
      if (selectedDealer) {
        const dealerZip = selectedDealer?.contact?.address?.zip;
        const dealerStreet1 = selectedDealer?.contact?.address?.street1;
        const dealerCity = selectedDealer?.contact?.address?.city;
        const dealerState = selectedDealer?.contact?.address?.state;

        for (const consignment of consignments) {
          const address = consignment?.address;
          if (address) {
            // Match by postal code and street address
            const zipMatch = address.postalCode === dealerZip;
            const streetMatch = address.address1 === dealerStreet1;
            const cityMatch = address.city === dealerCity;
            const stateMatch = address.stateOrProvinceCode === dealerState;

            // If we have multiple matches, it's likely the FFL consignment
            if ((zipMatch && streetMatch) || (zipMatch && cityMatch && stateMatch)) {
              fflConsignment = consignment;
              fflConsignmentId = consignment.id;
              break;
            }
          }
        }
      }

      // If we still don't have a match, try matching by product IDs (check if consignment has FFL products)
      if (!fflConsignment) {
        // Get the mapping to check FFL attributes
        const mapping = await SDK.getMappingData();
        const ffAttr = mapping?.ffl_custom_attribute_name?.trim().toLowerCase();
        const ffValue = mapping?.ffl_custom_attribute_value?.trim().toLowerCase();
        const fflFirearmAttr = mapping?.ffl_firearm_custom_attribute_name?.trim().toLowerCase();
        const fflFirearmValue = mapping?.ffl_firearm_custom_attribute_value;

        for (const consignment of consignments) {
          const lineItems = consignment?.lineItems?.physicalItems || [];
          if (lineItems.length === 0) continue;

          // Get product IDs from this consignment
          const consignmentProductIds = lineItems.map((item: any) => item.productEntityId || item.productId);
          const consignmentProducts = await SDK.getProducts(consignmentProductIds);

          // Check if any product in this consignment is an FFL product
          const hasFFLItems = consignmentProducts.some((product: any) => {
            const isFFL = product.customFields?.some(
              (field: any) => field.name.trim().toLowerCase() === ffAttr && field.value.trim().toLowerCase() === ffValue
            );
            const isSuppressor = product.customFields?.some(
              (field: any) =>
                field.name.trim().toLowerCase() === fflFirearmAttr &&
                field.value.trim().toLowerCase() === fflFirearmValue?.[3]?.toLowerCase()
            );
            return isFFL || isSuppressor;
          });

          if (hasFFLItems) {
            fflConsignment = consignment;
            fflConsignmentId = consignment.id;
            break;
          }
        }
      }

      if (!fflConsignment) {
        console.warn("Could not find FFL consignment in API data");
        isMarkingConsignmentRef.current = false;
        return;
      }

      // Remove the class from all containers first
      containers.forEach((container) => {
        container.classList.remove("consignment-container--ffl");
      });

      // Try to find the matching DOM container
      // Method 1: Check for consignment ID in data attributes
      if (fflConsignmentId) {
        for (let i = 0; i < containers.length; i++) {
          const container = containers[i];
          // Check if container has data-consignment-id or similar attribute
          const containerId = container.getAttribute("data-consignment-id") || 
                             container.getAttribute("data-id") ||
                             container.querySelector("[data-consignment-id]")?.getAttribute("data-consignment-id");
          
          if (containerId && containerId === String(fflConsignmentId)) {
            container.classList.add("consignment-container--ffl");
            console.log(`Marked consignment container at index ${i} as FFL (matched by consignment ID)`);
            isMarkingConsignmentRef.current = false;
            return;
          }
        }
      }

      // Method 2: Match by address text content
      const fflAddress = fflConsignment.address;
      if (fflAddress) {
        for (let i = 0; i < containers.length; i++) {
          const container = containers[i];
          const addressText = container.textContent || "";
          
          // Match by postal code and street address
          const postalCodeMatch = fflAddress.postalCode && addressText.includes(fflAddress.postalCode);
          const streetMatch = fflAddress.address1 && addressText.includes(fflAddress.address1);
          const cityMatch = fflAddress.city && addressText.includes(fflAddress.city);
          const stateMatch = fflAddress.stateOrProvinceCode && addressText.includes(fflAddress.stateOrProvinceCode);

          // Require at least postal code and one other match
          if (postalCodeMatch && (streetMatch || (cityMatch && stateMatch))) {
            container.classList.add("consignment-container--ffl");
            console.log(`Marked consignment container at index ${i} as FFL (matched by address)`);
            isMarkingConsignmentRef.current = false;
            return;
          }
        }
      }

      // Method 3: Fallback to API index (last resort)
      const fflIndex = await SDK.getFFLConsignmentIndex();
      if (fflIndex !== null && fflIndex >= 0 && fflIndex < containers.length) {
        containers[fflIndex].classList.add("consignment-container--ffl");
        console.log(`Marked consignment container at index ${fflIndex} as FFL (fallback to API index)`);
      } else {
        console.warn("Could not match FFL consignment to DOM container");
      }
    } finally {
      isMarkingConsignmentRef.current = false;
    }
  }, [config.checkoutId, selectedDealer]);

  useEffect(() => {
    if (!isFFL && !isSuppressor) return;

    // if split consignments is enabled, click the button to switch to multiple shipping modes
    if (config.hasMultiShippingEnabled) {
      if (config.nonFFLItemStrategy !== "FORCE_TO_FFL") {
        const btnShipMode = document.querySelector('[data-test="shipping-mode-toggle"]') as HTMLButtonElement;
        if (btnShipMode && btnShipMode.innerText.trim().toLowerCase() === "ship to multiple addresses") {
          btnShipMode.click();
        }

        setTimeout(() => {
          const btnShipMode = document.querySelector('[data-test="shipping-mode-toggle"]') as HTMLButtonElement;
          if (btnShipMode && btnShipMode.innerText.trim().toLowerCase() === "ship to a single address") {
            btnShipMode.style.display = "none";
          }
        }, 0);
      } else {
        const btnShipMode = document.querySelector('[data-test="shipping-mode-toggle"]') as HTMLButtonElement;
        if (btnShipMode && btnShipMode.innerText.trim().toLowerCase() === "ship to multiple addresses") {
          btnShipMode.style.display = "none";
        }
      }
    }

    // Initial check with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      markFFLConsignment();
    }, 100);

    // Watch for consignment containers appearing
    const handleMutations = () => {
      // Debounce the mutation handler to prevent excessive calls
      if (isMarkingConsignmentRef.current) return;
      if (mutationTimeoutRef.current) clearTimeout(mutationTimeoutRef.current);
      mutationTimeoutRef.current = setTimeout(() => {
        markFFLConsignment();
        mutationTimeoutRef.current = null;
      }, 300);
    };

    consignmentObserverRef.current = new MutationObserver(handleMutations);
    consignmentObserverRef.current.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timeoutId);
      if (mutationTimeoutRef.current) {
        clearTimeout(mutationTimeoutRef.current);
        mutationTimeoutRef.current = null;
      }
      if (consignmentObserverRef.current) {
        consignmentObserverRef.current.disconnect();
        consignmentObserverRef.current = null;
      }
    };
  }, [isFFL, isSuppressor, config.hasMultiShippingEnabled, markFFLConsignment]);

  // Reset and re-mark FFL consignment when dealer changes
  useEffect(() => {
    if (!selectedDealer) return;
    
    // Clear any existing FFL marks
    const containers = document.querySelectorAll(".consignment-container--ffl");
    containers.forEach((container) => {
      container.classList.remove("consignment-container--ffl");
    });

    // Delay to ensure checkout has reloaded after saveDealer
    const timeoutId = setTimeout(() => {
      markFFLConsignment();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [selectedDealer, markFFLConsignment]);

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

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    setErrors({ postalCode: "", acceptTerms: "" });

    if (!values.postalCode) {
      setErrors({ ...errors, postalCode: `${config.lang.postalCodeLabel} is required` });

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
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            #checkoutShippingAddress, #sameAsBilling, #sameAsBilling + label { display: none; }
            .consignment-container--ffl [data-test="edit-shipping-address"] { display: none; }
            .consignment-container--ffl [data-test="delete-consignment-button"] { display: none; }
            ${config.hasMultiShippingEnabled && `           
              ${
                // if the user can choose which consignment to put the items on, hide the remove buttons for the ffl line items
                // they cannot move these items to a non-ffl address
                config.nonFFLItemStrategy === "ALLOW_CHOICE" && [...SDK.fflLineItems].length > 0
                  ? [...SDK.fflLineItems].map((item) => `[data-test="remove-${item[0]}-button"] { display: none; }`).join("\n")
                  : ""
              }
              ${
                // hide the reallocate items button if the user cannot choose which consignment to put the items on
                config.nonFFLItemStrategy !== "ALLOW_CHOICE"
                  ? '.consignment-container--ffl [data-test="reallocate-items-button"] { display: none; }'
                  : ""
              }
              ${
                // hide the enter shipping address button if the user has not selected a dealer
                !SDK.getSession(config.checkoutId).selectedDealer &&
                '.consignment-container [data-test="enter-shipping-address"] { display: none; }'
              }`
            }
            
            `,
        }}
      />
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
  const { isModalOpen, setIsModalOpen, config, values, setSelectedDealer, isSuppressor } = useMasterFFL();

  const SELECTOR_ID = "ffSelectFrame";

  const dealerSelectionCallback = async (selectedDealer: any) => {
    if (!selectedDealer) return;

    const { shippingData, dealer } = await SDK.saveDealer(config.checkoutId, selectedDealer);
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
  }, [
    isModalOpen,
    values.postalCode,
    config.baseUrl,
    config.storeDomain,
    config.env,
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
