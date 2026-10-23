import { BaseProps, TimeKey } from '../../types';
import { TimePickerSlots } from '../../constants/slots';
type __VLS_Slots = TimePickerSlots;
declare const __VLS_base: import('vue').DefineComponent<BaseProps, {
    getSidebarProps: () => {
        modelValue: import('vue').WritableComputedRef<import('../..').InternalModelValue, import('../..').InternalModelValue>;
        time: any;
        updateTime: (values: import('../..').TimeInternalModel) => void;
    };
    toggleTimePicker: (show: boolean, childOpen?: TimeKey | "") => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "time-update": () => any;
    mount: () => any;
    "update-flow-step": (step: string) => any;
}, string, import('vue').PublicProps, Readonly<BaseProps> & Readonly<{
    "onTime-update"?: (() => any) | undefined;
    onMount?: (() => any) | undefined;
    "onUpdate-flow-step"?: ((step: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
