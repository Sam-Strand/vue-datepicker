import { Config, FloatingConfig, HighlightFn, InputAttributesConfig, MaybeDate, RootPropsWithDefaults, TimeModel, TransitionsConfig, UIParsed } from '../types';
import { Day } from 'date-fns';
export declare const useDefaults: (props: RootPropsWithDefaults) => {
    transitions: import('vue').ComputedRef<TransitionsConfig>;
    multiCalendars: import('vue').ComputedRef<({
        static: boolean;
        solo: boolean;
    } & string & {
        count: number;
    }) | ({
        static: boolean;
        solo: boolean;
    } & number & {
        count: number;
    }) | ({
        static: boolean;
        solo: boolean;
    } & true & {
        count: number;
    }) | {
        count: number;
        static: boolean;
        solo: boolean;
    }>;
    startTime: import('vue').ComputedRef<TimeModel | TimeModel[] | null>;
    ariaLabels: import('vue').ComputedRef<{
        toggleOverlay: string;
        menu: string;
        input: string;
        openTimePicker: string;
        closeTimePicker: string;
        incrementValue: (type: import('..').TimeKey) => string;
        decrementValue: (type: import('..').TimeKey) => string;
        openTpOverlay: (type: import('..').TimeKey) => string;
        amPmButton: string;
        openYearsOverlay: string;
        openMonthsOverlay: string;
        nextMonth: string;
        prevMonth: string;
        nextYear: string;
        prevYear: string;
        day: (dayVal: import('..').CalendarDay) => string;
        weekDay: (day: number) => string;
        clearInput: string;
        calendarIcon: string;
        timePicker: string;
        monthPicker: (isOverlay: boolean) => string;
        yearPicker: (isOverlay: boolean) => string;
        timeOverlay: (type: import('..').TimeKey) => string;
    }>;
    filters: import('vue').ComputedRef<{
        weekDays: number[];
        months: number[];
        years: number[];
        times: {
            hours: number[];
            minutes: number[];
            seconds: number[];
        };
    }>;
    actionRow: import('vue').ComputedRef<{
        showSelect: boolean;
        showCancel: boolean;
        showNow: boolean;
        showPreview: boolean;
        selectBtnLabel: string;
        cancelBtnLabel: string;
        nowBtnLabel: string;
        nowBtnRound: Partial<{
            rounding: import('date-fns').RoundingMethod;
            roundTo: import('date-fns').NearestMinutes;
        }>;
    }>;
    textInput: import('vue').ComputedRef<{
        format: string | ((date: Date) => string) | ((dates: Date[]) => string);
        pattern: string | string[] | ((date: Date) => string) | ((dates: Date[]) => string) | ((value: string) => Date | null);
        enabled: boolean;
        enterSubmit: boolean;
        tabSubmit: boolean;
        openMenu: string | boolean;
        rangeSeparator: string;
        selectOnFocus: boolean;
        escClose: boolean;
        maskFormat: string | undefined;
        applyOnBlur: boolean;
        separators: string[] | undefined;
    } | {
        format: string | ((date: Date) => string) | ((dates: Date[]) => string);
        pattern: string | ((date: Date) => string) | ((dates: Date[]) => string);
        enabled: boolean | undefined;
        enterSubmit: boolean;
        tabSubmit: boolean;
        openMenu: string;
        selectOnFocus: boolean;
        rangeSeparator: string;
        escClose: boolean;
        maskFormat: undefined;
        applyOnBlur: boolean;
        separators: undefined;
    }>;
    inline: import('vue').ComputedRef<{
        enabled: boolean;
        input: boolean;
    }>;
    config: import('vue').ComputedRef<Config>;
    highlight: import('vue').ComputedRef<HighlightFn | {
        dates: Date[];
        years: number[];
        months: import('..').MonthModel[];
        quarters: {
            quarter: number;
            year: number;
        }[];
        weekdays: number[];
        options: {
            highlightDisabled: boolean;
        };
        weeks: never[];
    }>;
    weekNumbers: import('vue').ComputedRef<{
        type: string | ((date: Date) => string | number);
        hideOnOffsetDates: boolean;
        label: string;
    } | undefined>;
    range: import('vue').ComputedRef<{
        noDisabledRange: boolean;
        showLastInRange: boolean;
        minMaxRawRange: boolean;
        partialRange: boolean;
        disableTimeRangeValidation: boolean;
        fixedStart: boolean;
        fixedEnd: boolean;
        maxRange: string | number;
        minRange: string | number;
        autoRange: string | number;
        autoSwitchStartEnd: boolean;
        enabled: boolean;
    }>;
    safeDates: import('vue').ComputedRef<{
        minDate: Date | null;
        maxDate: Date | null;
        disabledDates: ((date: Date) => boolean) | Map<string, Date | null>;
        allowedDates: Map<string, Date | null> | null;
        highlight: HighlightFn | Map<string, Date | null>;
        markers: Map<string, import('..').Marker> | null;
    }>;
    multiDates: import('vue').ComputedRef<{
        enabled: boolean;
        limit: number | null;
        dragSelect: boolean;
    }>;
    ui: import('vue').ComputedRef<UIParsed>;
    formats: import('vue').ComputedRef<{
        input: string | ((date: Date) => string) | ((dates: Date[]) => string);
        preview: string | ((date: Date) => string) | ((dates: Date[]) => string);
        month: string;
        year: string;
        weekDay: string;
        quarter: string;
        day: string;
    }>;
    teleport: import('vue').ComputedRef<string | HTMLElement | undefined>;
    timeConfig: import('vue').ComputedRef<{
        enableTimePicker: boolean;
        ignoreTimeValidation: boolean;
        enableSeconds: boolean;
        enableMinutes: boolean;
        is24: boolean;
        noHoursOverlay: boolean;
        noMinutesOverlay: boolean;
        noSecondsOverlay: boolean;
        hoursIncrement: number | string;
        minutesIncrement: number | string;
        secondsIncrement: number | string;
        hoursGridIncrement: number | string;
        minutesGridIncrement: number | string;
        secondsGridIncrement: number | string;
        timePickerInline: boolean;
        startTime: TimeModel | TimeModel[] | undefined;
    }>;
    flow: import('vue').ComputedRef<{
        steps: import('..').PickerSection[];
        partial: boolean;
    } | undefined>;
    inputAttrs: import('vue').ComputedRef<InputAttributesConfig>;
    floatingConfig: import('vue').ComputedRef<FloatingConfig>;
    weekStart: import('vue').ComputedRef<Day>;
    getDate: (date?: MaybeDate, reset?: boolean) => Date;
    getDateFromParts: (year: number, month: number, day?: number) => Date;
};
