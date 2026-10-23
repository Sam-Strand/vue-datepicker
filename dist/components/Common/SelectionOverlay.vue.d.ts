import { OverlayGridItem, PickerSection } from '../../types';
type __VLS_Props = {
    items: OverlayGridItem[][];
    type: PickerSection;
    useRelative?: boolean;
    height?: number | string;
    overlayLabel?: string;
    isLast: boolean;
    level?: 0 | 1 | 2;
};
declare var __VLS_1: {}, __VLS_3: {}, __VLS_7: {
    item: OverlayGridItem;
}, __VLS_9: {};
type __VLS_Slots = {} & {
    header?: (props: typeof __VLS_1) => any;
} & {
    overlay?: (props: typeof __VLS_3) => any;
} & {
    item?: (props: typeof __VLS_7) => any;
} & {
    'button-icon'?: (props: typeof __VLS_9) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    toggle: () => any;
    selected: (value: number) => any;
    "hover-value": (value: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onToggle?: (() => any) | undefined;
    onSelected?: ((value: number) => any) | undefined;
    "onHover-value"?: ((value: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
