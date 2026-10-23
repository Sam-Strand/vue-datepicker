import { InputParsedDate } from '../../types';
import { ComponentSlots, SlotUse } from '../../constants/slots';
type __VLS_Slots = ComponentSlots<SlotUse.Input>;
type __VLS_Props = {
    isMenuOpen?: boolean;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_Props, {
    focusInput: () => void;
    setParsedDate: (date: Date | null) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: () => any;
    close: () => any;
    focus: () => any;
    toggle: () => any;
    open: () => any;
    clear: () => any;
    "set-input-date": (date: InputParsedDate, submit?: boolean | undefined, tabbed?: boolean | undefined) => any;
    "select-date": () => any;
    "set-empty-date": () => any;
    "real-blur": () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onBlur?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
    onFocus?: (() => any) | undefined;
    onToggle?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    onClear?: (() => any) | undefined;
    "onSet-input-date"?: ((date: InputParsedDate, submit?: boolean | undefined, tabbed?: boolean | undefined) => any) | undefined;
    "onSelect-date"?: (() => any) | undefined;
    "onSet-empty-date"?: (() => any) | undefined;
    "onReal-blur"?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
