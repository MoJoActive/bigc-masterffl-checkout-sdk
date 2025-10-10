export declare const SDK: {
    init: () => Promise<{
        isFFL: boolean;
        isSuppressor: boolean;
    }>;
    getConfig: () => {
        env: "qa" | "production";
        baseUrl: string;
        appUrl: string;
        sdkUrl: string;
        storeDomain: string;
        storefrontApiToken: any;
        lang: {
            heading: string;
            subheading: string;
            postalCodeLabel: string;
            buttonText: string;
            termsLabel: string;
            selectedDealerLabel: string;
        };
        storeHash: string | undefined;
        checkoutId: string | undefined;
    };
    getSession: (checkoutId: string | undefined) => {
        postalCode: string | null;
        acceptTerms: boolean | undefined;
        selectedDealer: string | null;
    };
    setSession: (checkoutId: string | undefined, options: {
        postalCode?: string;
        acceptTerms?: string;
        selectedDealer: string;
    }) => void;
    removeSession: (checkoutId: string | undefined, key: string) => void;
    saveDealer: (checkoutId: string | undefined, dealer: any, isCustomCheckout?: boolean) => Promise<{
        dealer: any;
        shippingData: {
            address: {
                firstName: any;
                lastName: string;
                phone: any;
                company: any;
                address1: any;
                address2: string;
                city: any;
                stateOrProvinceCode: any;
                stateOrProvince: string;
                shouldSaveAddress: boolean;
                postalCode: any;
                localizedCountry: string;
                countryCode: string;
                customFields: never[];
            };
            lineItems: any[];
        };
    }>;
    getMappingData: () => Promise<any>;
    getProducts: (ids: number[] | undefined) => Promise<any>;
};
//# sourceMappingURL=sdk.d.ts.map