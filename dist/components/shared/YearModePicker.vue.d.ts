import { OverlayGridItem } from '../../types';
import { YearModeSlots } from '../../constants/slots';
interface YearModePickerProps {
    items: OverlayGridItem[][];
    instance: number;
    year: number;
    showYearPicker?: boolean;
    isDisabled: (isNext: boolean) => boolean;
}
type __VLS_Slots = YearModeSlots;
declare const __VLS_base: import('vue').DefineComponent<YearModePickerProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "handle-year": (increment: boolean) => any;
    "year-select": (year: number) => any;
    "toggle-year-picker": (arg: {
        show: boolean | undefined;
    }) => any;
}, string, import('vue').PublicProps, Readonly<YearModePickerProps> & Readonly<{
    "onHandle-year"?: ((increment: boolean) => any) | undefined;
    "onYear-select"?: ((year: number) => any) | undefined;
    "onToggle-year-picker"?: ((arg: {
        show: boolean | undefined;
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
