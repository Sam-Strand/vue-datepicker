import { OverlayGridItem } from '../../types';
/**
 * Both modes shared logic
 */
export declare const useMonthOrQuarterPicker: () => {
    isDisabled: import('vue').ComputedRef<(instance: number, next: boolean) => boolean>;
    groupedYears: import('vue').ComputedRef<(instance: number) => OverlayGridItem[][]>;
    showYearPicker: import('vue').Ref<boolean[], boolean[]>;
    selectYear: (year: number, instance: number) => void;
    setStartDate: () => void;
    toggleYearPicker: (instance: number, show?: boolean) => void;
    handleYearSelect: (year: number, instance: number) => void;
    handleYear: (instance: number, increment?: boolean) => void;
};
