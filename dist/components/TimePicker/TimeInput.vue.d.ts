import { InvalidTimesConfig, TimeKey } from '../../types';
import { TimeInputSlots } from '../../constants/slots';
interface TimeInputProps {
    hours: number;
    minutes: number;
    seconds: number;
    order: number;
    disabled: boolean;
    closeTimePickerBtn: HTMLElement | null;
    disabledTimesConfig: ((ind: number, hours?: number) => InvalidTimesConfig) | null;
    validateTime: any;
}
type __VLS_Slots = TimeInputSlots;
declare const __VLS_base: import('vue').DefineComponent<TimeInputProps, {
    openChildCmp: (child: TimeKey) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    mounted: () => any;
    "update:hours": (hours: number) => any;
    "update:minutes": (minutes: number) => any;
    "update:seconds": (seconds: number) => any;
    "overlay-opened": (type: TimeKey) => any;
    "overlay-closed": (type: TimeKey) => any;
    "set-hours": () => any;
    "set-minutes": () => any;
}, string, import('vue').PublicProps, Readonly<TimeInputProps> & Readonly<{
    onMounted?: (() => any) | undefined;
    "onUpdate:hours"?: ((hours: number) => any) | undefined;
    "onUpdate:minutes"?: ((minutes: number) => any) | undefined;
    "onUpdate:seconds"?: ((seconds: number) => any) | undefined;
    "onOverlay-opened"?: ((type: TimeKey) => any) | undefined;
    "onOverlay-closed"?: ((type: TimeKey) => any) | undefined;
    "onSet-hours"?: (() => any) | undefined;
    "onSet-minutes"?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
