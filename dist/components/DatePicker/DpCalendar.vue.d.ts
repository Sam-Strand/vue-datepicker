import { CalendarDay, CalendarWeek } from '../../types';
import { CalendarSlots } from '../../constants/slots';
interface DpCalendarProps {
    instance: number;
    mappedDates: CalendarWeek[];
    month: number;
    year: number;
}
type __VLS_Slots = CalendarSlots;
declare const __VLS_base: import('vue').DefineComponent<DpCalendarProps, {
    triggerTransition: (month: number, year: number) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "select-date": (day: CalendarDay) => any;
    "set-hover-date": (day: CalendarDay) => any;
    "handle-scroll": (event: WheelEvent) => any;
    "handle-swipe": (direction: "right" | "left") => any;
}, string, import('vue').PublicProps, Readonly<DpCalendarProps> & Readonly<{
    "onSelect-date"?: ((day: CalendarDay) => any) | undefined;
    "onSet-hover-date"?: ((day: CalendarDay) => any) | undefined;
    "onHandle-scroll"?: ((event: WheelEvent) => any) | undefined;
    "onHandle-swipe"?: ((direction: "right" | "left") => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
