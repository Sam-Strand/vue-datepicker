import { Duration } from 'date-fns';
import { HighlightConfig, HighlightFn, InternalModelValue, MaybeDate, Numeric, OverlayGridItem, SelectItem, TimeKey, TimeModel, TimeObj } from '../types';
export declare const useDateUtils: () => {
    resetDateTime: (date: MaybeDate, fromStartOfMonth?: boolean) => Date;
    groupListAndMap: (list: SelectItem[], cb: (item: SelectItem) => {
        active: boolean;
        disabled: boolean;
        highlighted?: boolean;
        isBetween?: boolean;
    }) => OverlayGridItem[][];
    setTime: (time: Partial<{
        hours: Numeric;
        minutes: Numeric;
        seconds: Numeric;
    }>, dateToSet?: MaybeDate) => Date;
    getWeekFromDate: (date: Date, weekStart: string | number) => [Date, Date];
    isDateAfter: (date: MaybeDate, dateToCompare: MaybeDate) => boolean;
    isDateBefore: (date: MaybeDate, dateToCompare: MaybeDate) => boolean;
    isDateBetween: (range: Date[], hoverDate: Date | null, dateToCheck: Date) => boolean;
    isDateEqual: (date: MaybeDate, dateToCompare: MaybeDate) => boolean;
    getDaysInBetween: (dateOne: Date, dateTwo: Date) => import('date-fns').EachDayOfIntervalResult<{
        start: Date;
        end: Date;
    }, undefined>;
    getCellId: (date: Date) => string;
    resetDate: (date: MaybeDate) => Date;
    getMinMonth: (year: number, minDate?: MaybeDate) => number | undefined;
    getMaxMonth: (year: number, maxDate?: MaybeDate) => number | undefined;
    getYearFromDate: (date: MaybeDate) => number | undefined;
    getTimeObj: (date: Date) => TimeObj;
    setTimeValue: (date: Date) => Date;
    sanitizeTime: (time: TimeModel, type?: TimeKey, value?: number) => Duration;
    getBeforeAndAfterInRange: (range: number, date: Date) => {
        before: Date;
        after: Date;
    };
    isModelAuto: (modelValue: InternalModelValue) => boolean;
    matchDate: (date: Date, mapOrFn: Map<string, any> | ((date: Date) => boolean) | null) => boolean;
    checkHighlightMonth: (defaultedHighlight: HighlightConfig | HighlightFn, month: number, year: number) => boolean;
    checkHighlightYear: (defaultedHighlight: HighlightConfig | HighlightFn, year: number) => boolean;
};
