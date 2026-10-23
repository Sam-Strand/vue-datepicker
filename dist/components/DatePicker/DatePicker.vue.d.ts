import { DatePickerSlots } from '../../constants/slots';
import { BaseProps, TimeKey } from '../../types';
type __VLS_Slots = DatePickerSlots;
declare const __VLS_base: import('vue').DefineComponent<BaseProps, {
    clearHoverDate: () => void;
    presetDate: (value: Date[] | string[] | Date | string) => void;
    handleArrow: (arrow: "left" | "right", instance: number, vertical?: boolean) => void;
    updateMonthYear: (instance: number, val: {
        month: number;
        year: number;
        fromNav?: boolean;
    }) => void;
    setStartTime: () => void;
    toggleMonthPicker: (show?: boolean, instance?: number) => void;
    toggleYearPicker: (show?: boolean, instance?: number) => void;
    toggleTimePicker: (show: boolean, childOpen?: TimeKey) => void;
    getSidebarProps: () => {
        modelValue: import('vue').WritableComputedRef<import('../..').InternalModelValue, import('../..').InternalModelValue>;
        month: import('vue').ComputedRef<(instance: number) => number>;
        year: import('vue').ComputedRef<(instance: number) => number>;
        time: any;
        updateTime: (values: import('../..').TimeInternalModel) => void;
        updateMonthYear: (instance: number, val: {
            month: number;
            year: number;
            fromNav?: boolean;
        }) => void;
        selectDate: (day: import('../..').CalendarDay, isNext?: boolean) => void;
        presetDate: (value: Date[] | string[] | Date | string) => void;
    };
    changeMonth: (isNext: boolean) => void;
    changeYear: (isNext: boolean) => void;
    selectWeekDate: (selectStart: boolean, id: string | null) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "auto-apply": (ignoreClose?: boolean | undefined) => any;
    "select-date": () => any;
    "time-update": () => any;
    "focus-menu": () => any;
}, string, import('vue').PublicProps, Readonly<BaseProps> & Readonly<{
    "onAuto-apply"?: ((ignoreClose?: boolean | undefined) => any) | undefined;
    "onSelect-date"?: (() => any) | undefined;
    "onTime-update"?: (() => any) | undefined;
    "onFocus-menu"?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
