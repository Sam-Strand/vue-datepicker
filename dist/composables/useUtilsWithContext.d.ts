import { SelectItem } from '../types';
export declare const useUtilsWithContext: () => {
    getMonths: () => SelectItem[];
    getYears: () => SelectItem[];
    isOutOfYearRange: (year: number) => boolean;
};
