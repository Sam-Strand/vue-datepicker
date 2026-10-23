import { RootProps, RootSlots } from './types';
type __VLS_Slots = RootSlots;
declare const __VLS_base: import('vue').DefineComponent<RootProps, {
    openMenu: () => void;
    closeMenu: () => void;
    selectDate: () => void;
    clearValue: () => void;
    formatInputValue: () => void;
    updateInternalModelValue: (value: Date | Date[]) => void;
    setMonthYear: (value: Partial<import('./types').MonthModel>, instance?: number) => void;
    parseModel: () => void;
    switchView: (view: import('./types').MenuView, instance?: number) => void;
    executeFlow: (step?: import('./types').PickerSection) => void;
    toggleMenu: () => void;
    dpMenuRef: () => any;
    dpWrapMenuRef: () => Readonly<import('vue').ShallowRef<HTMLDivElement | null, HTMLDivElement | null>>;
    inputRef: () => any;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: () => any;
    focus: () => any;
    invalid: (event: Event) => any;
    open: () => any;
    "update:model-value": (value: any) => any;
    "internal-model-change": (value: import('./types').InternalModelValue) => any;
    "text-submit": () => any;
    "text-input": (event: string | Event, parsedDate: import('./types').InputParsedDate) => any;
    closed: () => any;
    cleared: () => any;
    "flow-step": (step: import('./types').PickerSection) => any;
    "update-month-year": (value: {
        instance: number;
        month: number;
        year: number;
    }) => any;
    "invalid-select": () => any;
    "invalid-fixed-range": (date: Date) => any;
    "invalid-date": (date: Date) => any;
    "tooltip-open": (marker: import('./types').Marker) => any;
    "tooltip-close": (marker: import('./types').Marker) => any;
    "am-pm-change": (value: import('./types').Hour12) => any;
    "range-start": (date: Date) => any;
    "range-end": (date: Date) => any;
    "date-click": (date: Date) => any;
    "overlay-toggle": (toggle: {
        open: boolean;
        overlay: import('./types').PickerSection;
    }) => any;
    "menu-mounted": (el: HTMLElement) => any;
    "menu-unmounted": (el: HTMLElement) => any;
}, string, import('vue').PublicProps, Readonly<RootProps> & Readonly<{
    onBlur?: (() => any) | undefined;
    onFocus?: (() => any) | undefined;
    onInvalid?: ((event: Event) => any) | undefined;
    onOpen?: (() => any) | undefined;
    "onUpdate:model-value"?: ((value: any) => any) | undefined;
    "onInternal-model-change"?: ((value: import('./types').InternalModelValue) => any) | undefined;
    "onText-submit"?: (() => any) | undefined;
    "onText-input"?: ((event: string | Event, parsedDate: import('./types').InputParsedDate) => any) | undefined;
    onClosed?: (() => any) | undefined;
    onCleared?: (() => any) | undefined;
    "onFlow-step"?: ((step: import('./types').PickerSection) => any) | undefined;
    "onUpdate-month-year"?: ((value: {
        instance: number;
        month: number;
        year: number;
    }) => any) | undefined;
    "onInvalid-select"?: (() => any) | undefined;
    "onInvalid-fixed-range"?: ((date: Date) => any) | undefined;
    "onInvalid-date"?: ((date: Date) => any) | undefined;
    "onTooltip-open"?: ((marker: import('./types').Marker) => any) | undefined;
    "onTooltip-close"?: ((marker: import('./types').Marker) => any) | undefined;
    "onAm-pm-change"?: ((value: import('./types').Hour12) => any) | undefined;
    "onRange-start"?: ((date: Date) => any) | undefined;
    "onRange-end"?: ((date: Date) => any) | undefined;
    "onDate-click"?: ((date: Date) => any) | undefined;
    "onOverlay-toggle"?: ((toggle: {
        open: boolean;
        overlay: import('./types').PickerSection;
    }) => any) | undefined;
    "onMenu-mounted"?: ((el: HTMLElement) => any) | undefined;
    "onMenu-unmounted"?: ((el: HTMLElement) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
