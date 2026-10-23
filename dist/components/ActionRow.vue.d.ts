import { ActionRowSlots } from '../constants/slots';
interface ActionRowProps {
    menuMount?: boolean;
    calendarWidth?: number;
}
type __VLS_Slots = ActionRowSlots;
declare const __VLS_base: import('vue').DefineComponent<ActionRowProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "select-date": () => any;
    "close-picker": () => any;
    "select-now": () => any;
}, string, import('vue').PublicProps, Readonly<ActionRowProps> & Readonly<{
    "onSelect-date"?: (() => any) | undefined;
    "onClose-picker"?: (() => any) | undefined;
    "onSelect-now"?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
