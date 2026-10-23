import { EmitFn } from 'vue';
export interface QuarterPickerEmits {
    'auto-apply': [ignoreClose?: boolean];
}
export declare const useQuarterPicker: (emit: EmitFn<QuarterPickerEmits>) => {
    groupedYears: import('vue').ComputedRef<(instance: number) => import('../..').OverlayGridItem[][]>;
    year: import('vue').ComputedRef<(instance: number) => number>;
    isDisabled: import('vue').ComputedRef<(instance: number, next: boolean) => boolean>;
    quarters: import('vue').ComputedRef<(instance: number) => {
        text: string;
        value: Date;
        active: boolean;
        highlighted: boolean;
        disabled: boolean;
        isBetween: boolean;
    }[]>;
    showYearPicker: import('vue').Ref<boolean[], boolean[]>;
    modelValue: import('vue').WritableComputedRef<import('../..').InternalModelValue, import('../..').InternalModelValue>;
    selectYear: (year: number, instance: number) => void;
    toggleYearPicker: (instance: number, show?: boolean) => void;
    handleYearSelect: (year: number, instance: number) => void;
    handleYear: (instance: number, increment?: boolean) => void;
    setHoverDate: (date: Date) => void;
    selectQuarter: (date: Date, instance: number, disabled: boolean) => void;
};
