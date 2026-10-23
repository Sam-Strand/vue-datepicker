export declare const useInput: () => {
    textPasted: import('vue').Ref<boolean, boolean>;
    parseFreeInput: (value: string, inputVal?: string) => Date | null;
    applyMaxValues: (raw: string, tokens: string[]) => string;
    createMaskedValue: (raw: string, maskFormat: string) => string;
};
