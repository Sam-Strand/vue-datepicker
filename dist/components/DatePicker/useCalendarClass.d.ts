import { UnwrapRef } from 'vue';
import { CalendarDay } from '../../types';
export declare const useCalendarClass: () => {
    setHoverDate: (day: UnwrapRef<CalendarDay>) => void;
    clearHoverDate: () => void;
    getDayClassData: (day: CalendarDay) => Record<string, boolean>;
};
