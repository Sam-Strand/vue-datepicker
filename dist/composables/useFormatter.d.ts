export declare const useFormatter: () => {
    formatYear: (year: number) => string;
    formatMonth: (month: number) => string;
    formatWeekDay: (date: Date) => string;
    formatQuarter: (quarter: Date) => string;
    formatSelectedDate: (value: Date | Date[] | null, customPattern?: string, preview?: boolean) => string;
    formatForTextInput: () => string;
    formatPreview: (value: Date | Date[] | null) => string;
    formatQuarterText: (start: Date, end: Date) => string;
    formatDay: (date: Date) => string;
};
