import { InternalModelValue } from '../types';
export declare const useValidation: () => {
    isDisabled: (date: Date) => boolean;
    validateDate: (date: Date | null | undefined) => boolean;
    validateMonthYearInRange: (month: number, year: number, isNext: boolean, preventNav: boolean) => boolean;
    isDateRangeAllowed: (pickedRange: Date[]) => boolean;
    checkMinMaxRange: (secondDate: Date, modelValue: InternalModelValue, index?: number) => boolean;
    isValidTime: (date: InternalModelValue) => boolean;
    validateMonthYear: (date: Date, preventMinMaxNavigation: boolean, next: boolean) => boolean;
    validateMinDate: (month: number, year: number) => boolean;
    validateMaxDate: (month: number, year: number) => boolean;
    isValidDate: (value: Date | Date[] | null | (Date | null)[]) => boolean;
    checkPartialRangeValue: (isPartial: boolean) => Date;
    checkRangeEnabled: <T>(fn: () => T, range: boolean) => T;
    checkMinMaxValue: (value: number | string, min?: number, max?: number) => boolean;
    isTimeValid: import('vue').ComputedRef<(internalModelValue: InternalModelValue) => boolean>;
    isMonthValid: import('vue').ComputedRef<(internalModelValue: InternalModelValue) => boolean>;
};
