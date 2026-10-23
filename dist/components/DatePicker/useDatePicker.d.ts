import { EmitFn, UnwrapRef } from 'vue';
import { CalendarDay, CalendarWeek, Marker, TimeInternalModel, TimeKey } from '../../types';
export interface DatePickerEmits {
    'focus-menu': [];
    'select-date': [];
    'time-update': [];
    'auto-apply': [ignoreClose?: boolean];
}
export declare const useDatePicker: (emit: EmitFn<DatePickerEmits>, triggerCalendarTransition: (inst?: number) => void) => {
    calendars: import('vue').Ref<import('../..').CalendarMonthYear[], import('../..').CalendarMonthYear[]>;
    modelValue: import('vue').WritableComputedRef<import('../..').InternalModelValue, import('../..').InternalModelValue>;
    month: import('vue').ComputedRef<(instance: number) => number>;
    year: import('vue').ComputedRef<(instance: number) => number>;
    time: any;
    disabledTimesConfig: import('vue').ComputedRef<(ind: number, hoursVal?: number) => {
        hours: number[];
        minutes: undefined;
        seconds: undefined;
    } | {
        hours: never[];
        minutes: number[];
        seconds: (number | undefined)[];
    }>;
    today: Date;
    validateTime: (type: TimeKey, value: number | number[]) => boolean;
    getCalendarDays: (month: number, year: number) => CalendarWeek[];
    getMarker: (date: UnwrapRef<CalendarDay>) => Marker | undefined;
    handleScroll: (event: WheelEvent, instance: number) => void;
    handleSwipe: (direction: "left" | "right", instance: number) => void;
    handleArrow: (arrow: "left" | "right", instance: number, vertical?: boolean) => void;
    selectDate: (day: CalendarDay, isNext?: boolean) => void;
    updateMonthYear: (instance: number, val: {
        month: number;
        year: number;
        fromNav?: boolean;
    }) => void;
    presetDate: (value: Date[] | string[] | Date | string) => void;
    updateTime: (values: TimeInternalModel) => void;
    assignMonthAndYear: (date?: Date, fromMount?: boolean) => void;
    setStartTime: () => void;
};
