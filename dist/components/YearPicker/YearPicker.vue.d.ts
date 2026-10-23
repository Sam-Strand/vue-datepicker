import { BaseProps } from '../../types';
import { YearPickerSlots } from '../../constants/slots';
type __VLS_Slots = YearPickerSlots;
declare const __VLS_base: import('vue').DefineComponent<BaseProps, {
    getSidebarProps: () => {
        modelValue: import('vue').WritableComputedRef<import('../..').InternalModelValue, import('../..').InternalModelValue>;
        selectYear: (year: number) => void;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "auto-apply": (fromFlow?: boolean | undefined) => any;
}, string, import('vue').PublicProps, Readonly<BaseProps> & Readonly<{
    "onAuto-apply"?: ((fromFlow?: boolean | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
