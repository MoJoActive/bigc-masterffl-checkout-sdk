export interface MasterFFLContextType {
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
    selectedDealer: any;
    setSelectedDealer: (selectedDealer: any) => void;
    error: string | null;
    setError: (error: string | null) => void;
    isFFL: boolean;
    isSuppressor: boolean;
    isEntirelyFFL: boolean;
    checkout: any;
    setCheckout: (checkout: any) => void;
    fixInvalidConsignments: (checkout: any) => Promise<void>;
}
export declare const renderMasterFFL: () => Promise<void>;
//# sourceMappingURL=index.d.ts.map