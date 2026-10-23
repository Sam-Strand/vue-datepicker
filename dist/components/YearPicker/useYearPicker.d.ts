import { EmitFn } from 'vue';
export interface YearPickerEmits {
    'auto-apply': [fromFlow?: boolean];
}
export declare const useYearPicker: (emit: EmitFn<YearPickerEmits>) => {
    groupedYears: import('vue').ComputedRef<import('../..').OverlayGridItem[][]>;
    focusYear: import('vue').Ref<any, any>;
    setHoverValue: (value: number) => void;
    selectYear: (year: number) => void;
};
