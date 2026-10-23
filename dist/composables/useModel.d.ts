import { EmitFn } from 'vue';
export declare const useModel: (emit?: EmitFn<{
    "select-date": [];
}>) => {
    selectCurrentDate: () => void;
    selectOnAutoApply: () => void;
};
