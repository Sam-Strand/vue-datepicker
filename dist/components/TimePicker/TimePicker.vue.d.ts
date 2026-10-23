import { InvalidTimesConfig, TimeKey } from '../../types';
import { TimePickerSlots } from '../../constants/slots';
interface TimePickerProps {
    hours: number | number[];
    minutes: number | number[];
    seconds: number | number[];
    disabledTimesConfig: ((ind: number, hours?: number) => InvalidTimesConfig) | null;
    noOverlayFocus?: boolean;
    validateTime: (type: TimeKey, value: number | number[]) => boolean;
}
type __VLS_Slots = TimePickerSlots;
declare const __VLS_base: import('vue').DefineComponent<TimePickerProps, {
    toggleTimePicker: (show: boolean, childOpen?: TimeKey | "") => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:hours": (hours: number | number[]) => any;
    "update:minutes": (minutes: number | number[]) => any;
    "update:seconds": (seconds: number | number[]) => any;
}, string, import('vue').PublicProps, Readonly<TimePickerProps> & Readonly<{
    "onUpdate:hours"?: ((hours: number | number[]) => any) | undefined;
    "onUpdate:minutes"?: ((minutes: number | number[]) => any) | undefined;
    "onUpdate:seconds"?: ((seconds: number | number[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
