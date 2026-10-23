import { SelectItem } from '../../types';
import { ComponentSlots, SlotUse } from '../../constants/slots';
interface DpHeaderProps {
    month: number;
    year: number;
    instance: number;
    years: SelectItem[];
    months: SelectItem[];
    menuWrapRef: HTMLElement | null;
}
type __VLS_Slots = ComponentSlots<SlotUse.DatePickerHeader>;
declare const __VLS_base: import('vue').DefineComponent<DpHeaderProps, {
    toggleMonthPicker: (show?: boolean) => void;
    toggleYearPicker: (show?: boolean) => void;
    handleMonthYearChange: (isNext: boolean, fromNav?: boolean) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update-month-year": (value: {
        fromNav?: boolean;
        month: number;
        year: number;
    }) => any;
}, string, import('vue').PublicProps, Readonly<DpHeaderProps> & Readonly<{
    "onUpdate-month-year"?: ((value: {
        fromNav?: boolean;
        month: number;
        year: number;
    }) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
