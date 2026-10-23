import { MenuView, MonthModel } from '../types';
import { MenuSlots } from '../constants/slots';
type __VLS_Slots = MenuSlots;
type __VLS_Props = {
    collapse: boolean;
    noOverlayFocus: boolean;
    getInputRect: () => DOMRect;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_Props, {
    updateMonthYear: (instance: number, value: MonthModel) => void;
    switchView: (view: MenuView, instance?: number) => any;
    onValueCleared: () => void;
    executeFlow: (step?: import('..').PickerSection) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "auto-apply": (ignoreClose?: boolean | undefined) => any;
    "select-date": () => any;
    "close-picker": () => any;
    "time-update": () => any;
    "menu-blur": () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onAuto-apply"?: ((ignoreClose?: boolean | undefined) => any) | undefined;
    "onSelect-date"?: (() => any) | undefined;
    "onClose-picker"?: (() => any) | undefined;
    "onTime-update"?: (() => any) | undefined;
    "onMenu-blur"?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
