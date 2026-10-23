import { EmitFn } from 'vue';
export declare const useMonthYearPick: (props: {
    month: number;
    year: number;
}, emit: EmitFn<{
    "update-month-year": [val: {
        fromNav?: boolean;
        month: number;
        year: number;
    }];
}>) => {
    handleMonthYearChange: (isNext: boolean, fromNav?: boolean) => void;
    isDisabled: import('vue').ComputedRef<(next: boolean) => boolean>;
    updateMonthYear: (month: number, year: number, fromNav?: boolean) => void;
};
