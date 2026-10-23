import { EmitFn } from 'vue';
export declare const useComponentShared: () => {
    getRangeWithFixedDate: (date: Date) => Date[];
    setPresetDate: (opts: {
        value: Date[] | string[] | Date | string;
    }) => void;
    checkRangeAutoApply: (selectedRange: Date[], emit: EmitFn<{
        "auto-apply": [ignoreClose?: boolean];
    }>, ignoreClose: boolean) => void;
    setMonthOrYearRange: (date: Date) => Date[];
    handleMultiDatesSelect: (date: Date, multiDatesLimit?: number | string | null) => void;
};
