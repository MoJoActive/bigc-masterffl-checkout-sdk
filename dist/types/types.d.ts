import type { CheckoutSelectors, CheckoutService } from "@bigcommerce/checkout-sdk";
export interface MasterFFLBaseConfig {
    env: "qa" | "production";
    storefrontApiToken: string;
    storeHash: string | undefined;
    checkoutId: string | undefined;
    lang: {
        heading?: string;
        subheading?: string;
        buttonText?: string;
        postalCodeLabel?: string;
        termsLabel?: string;
        selectedDealerLabel?: string;
    };
}
interface FFLDealerSelectorOptions {
    storeDomain: string;
    envMode: MasterFFLBaseConfig["env"];
    filters: "exclude_non_sot_dealer=true" | "" | undefined;
    dealerSelectionCallback: (dealer: any) => Promise<void>;
}
interface FFLDealerSelector {
    configuration: {
        url: string;
    };
    containerId: string;
    loadSubscriber: () => void;
    messageSubscriber: (message: string) => void;
    options: FFLDealerSelectorOptions;
    zipCode: string;
    show: () => void;
}
interface FFLDealerSelectorSDK {
    FFLDealerSelector: new (zipCode: string, selector: string, sdkOptions: {
        url: string;
    }, storeOptions: FFLDealerSelectorOptions) => FFLDealerSelector;
}
declare global {
    interface Window {
        checkoutConfig: {
            checkoutId: string;
        };
        masterFFLConfig?: MasterFFLBaseConfig;
        masterFFLCache: {
            [key: string]: any;
        };
        FFLSelectSDK: {
            FFLDealerSelector: FFLDealerSelectorSDK["FFLDealerSelector"];
        };
    }
}
export interface MasterFFLConfig extends MasterFFLBaseConfig {
    baseUrl: string;
    appUrl: string;
    sdkUrl: string;
    storeDomain: string;
    storeHash: string | undefined;
    checkoutId: string | undefined;
}
export interface MasterFFLContextType {
    checkoutService: CheckoutService;
    checkoutState: CheckoutSelectors;
    isModalOpen: boolean;
    setIsModalOpen: (isModalOpen: boolean) => void;
    values: {
        postalCode: string;
        acceptTerms: boolean;
    };
    setValues: (values: {
        postalCode: string;
        acceptTerms: boolean;
    }) => void;
    config: MasterFFLConfig;
    handleSaveDealer: (dealer: any) => Promise<void>;
    selectedDealer: any;
    error: string | null;
    isFFL: boolean;
    isSuppressor: boolean;
    mappingData?: {
        category_mapping: any[];
        ffl_custom_attribute_name: any;
        ffl_custom_attribute_value: any;
        ffl_firearm_custom_attribute_name: any;
        ffl_firearm_custom_attribute_value: any;
    } | null;
}
export interface withMasterFFLProps {
    masterFFL: MasterFFLContextType;
}
export interface CheckoutContextProps {
    checkoutService: CheckoutService;
    checkoutState: CheckoutSelectors;
}
export declare enum CheckoutStepType {
    Billing = "billing",
    Customer = "customer",
    Payment = "payment",
    Shipping = "shipping"
}
export {};
//# sourceMappingURL=types.d.ts.map