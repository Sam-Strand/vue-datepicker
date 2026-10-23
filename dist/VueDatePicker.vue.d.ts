import { MenuView, ModelValue, MonthModel, PickerSection } from './types';
declare var __VLS_23: "trigger" | "input-icon" | "clear-icon" | "dp-input" | "hours-overlay-value" | "hours-overlay-header" | "minutes-overlay-value" | "minutes-overlay-header" | "seconds-overlay-value" | "seconds-overlay-header", __VLS_24: any, __VLS_57: any, __VLS_58: any;
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_23>]?: (props: typeof __VLS_24) => any;
} & {
    [K in NonNullable<typeof __VLS_57>]?: (props: typeof __VLS_58) => any;
};
declare const __VLS_base: import('vue').DefineComponent<{}, {
    closeMenu: (fromClickAway?: boolean) => void;
    selectDate: () => void;
    clearValue: () => void;
    openMenu: () => void;
    onScroll: () => void;
    formatInputValue: () => void;
    updateInternalModelValue: (value: Date | Date[]) => void;
    setMonthYear: (value: Partial<MonthModel>, instance?: number) => void;
    parseModel: (value?: ModelValue) => void;
    switchView: (view: MenuView, instance?: number) => void;
    toggleMenu: () => void;
    executeFlow: (skipStep?: PickerSection) => void;
    getDpWrapMenuRef: () => Readonly<import('vue').ShallowRef<HTMLDivElement | null, HTMLDivElement | null>>;
    dpMenuRef: () => any;
    dpWrapMenuRef: () => Readonly<import('vue').ShallowRef<HTMLDivElement | null, HTMLDivElement | null>>;
    inputRef: () => any;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
