import { EmitFn } from 'vue';
import { OverlayGridItem } from '../../types';
export interface MonthPickerEmits {
    'auto-apply': [ignoreClose?: boolean];
}
export declare const useMonthPicker: (emit: EmitFn<MonthPickerEmits>) => {
    groupedMonths: import('vue').ComputedRef<(instance: number) => OverlayGridItem[][]>;
    groupedYears: import('vue').ComputedRef<(instance: number) => OverlayGridItem[][]>;
    year: import('vue').ComputedRef<(instance: number) => number>;
    isDisabled: import('vue').ComputedRef<(instance: number, next: boolean) => boolean>;
    showYearPicker: import('vue').Ref<boolean[], boolean[]>;
    modelValue: import('vue').WritableComputedRef<import('../..').InternalModelValue, import('../..').InternalModelValue>;
    toggleYearPicker: (instance: number, show?: boolean) => void;
    handleYearSelect: (year: number, instance: number) => void;
    handleYear: (instance: number, increment?: boolean) => void;
    presetDate: (value: Date[] | string[] | Date | string) => void;
    setHoverDate: (month: number, instance: number) => void;
    selectMonth: (month: number, instance: number) => void;
    selectYear: (year: number, instance: number) => void;
    getModelMonthYear: () => {
        month: number;
        year: number;
    } | {
        month: null;
        year: null;
    } | ({
        month: number;
        year: number;
    } | {
        month: null;
        year: null;
    })[];
};
