import { BaseProps } from '../../types';
import { ComponentSlots, SlotUse } from '../../constants/slots';
type __VLS_Slots = ComponentSlots<SlotUse.MonthPicker> & ComponentSlots<SlotUse.YearMode>;
declare const __VLS_base: import('vue').DefineComponent<BaseProps, {
    getSidebarProps: () => {
        modelValue: import('vue').WritableComputedRef<import('../..').InternalModelValue, import('../..').InternalModelValue>;
        year: import('vue').ComputedRef<(instance: number) => number>;
        getModelMonthYear: () => {
            month: number;
            year: number;
        } | {
            month: null;
            year: null;
        } | ({
            month: number;
            year: number;
        } | {
            month: null;
            year: null;
        })[];
        selectMonth: (month: number, instance: number) => void;
        selectYear: (year: number, instance: number) => void;
        handleYear: (instance: number, increment?: boolean) => void;
    };
    presetDate: (value: Date[] | string[] | Date | string) => void;
    toggleYearPicker: (show: boolean) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "auto-apply": (ignoreClose?: boolean | undefined) => any;
}, string, import('vue').PublicProps, Readonly<BaseProps> & Readonly<{
    "onAuto-apply"?: ((ignoreClose?: boolean | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
