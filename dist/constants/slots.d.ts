import { Slots } from 'vue';
import { PresetDate, RootSlots } from '../types';
export declare enum SlotUse {
    Input = "input",
    DatePicker = "date-picker",
    Calendar = "calendar",
    DatePickerHeader = "date-picker-header",
    Menu = "menu",
    ActionRow = "action-row",
    TimePicker = "time-picker",
    TimeInput = "time-input",
    PassTrough = "pass-trough",
    MonthPicker = "month-picker",
    YearMode = "year-mode",
    QuarterPicker = "quarter-picker",
    YearPicker = "year-picker"
}
declare const slots: readonly [{
    readonly name: "trigger";
    readonly use: readonly [SlotUse.Input];
}, {
    readonly name: "input-icon";
    readonly use: readonly [SlotUse.Input];
}, {
    readonly name: "clear-icon";
    readonly use: readonly [SlotUse.Input];
}, {
    readonly name: "dp-input";
    readonly use: readonly [SlotUse.Input];
}, {
    readonly name: "clock-icon";
    readonly use: readonly [SlotUse.TimePicker, SlotUse.TimeInput, SlotUse.PassTrough];
}, {
    readonly name: "arrow-left";
    readonly use: readonly [SlotUse.DatePickerHeader, SlotUse.PassTrough, SlotUse.YearMode];
}, {
    readonly name: "arrow-right";
    readonly use: readonly [SlotUse.DatePickerHeader, SlotUse.PassTrough, SlotUse.YearMode];
}, {
    readonly name: "arrow-up";
    readonly use: readonly [SlotUse.TimePicker, SlotUse.TimeInput, SlotUse.DatePickerHeader, SlotUse.PassTrough];
}, {
    readonly name: "arrow-down";
    readonly use: readonly [SlotUse.TimePicker, SlotUse.TimeInput, SlotUse.DatePickerHeader, SlotUse.PassTrough];
}, {
    readonly name: "calendar-icon";
    readonly use: readonly [SlotUse.DatePickerHeader, SlotUse.TimePicker, SlotUse.PassTrough, SlotUse.YearMode];
}, {
    readonly name: "day";
    readonly use: readonly [SlotUse.Calendar, SlotUse.PassTrough];
}, {
    readonly name: "month-overlay-value";
    readonly use: readonly [SlotUse.DatePickerHeader, SlotUse.PassTrough, SlotUse.MonthPicker];
}, {
    readonly name: "year-overlay-value";
    readonly use: readonly [SlotUse.DatePickerHeader, SlotUse.PassTrough, SlotUse.YearMode, SlotUse.YearPicker];
}, {
    readonly name: "year-overlay";
    readonly use: readonly [SlotUse.DatePickerHeader, SlotUse.PassTrough];
}, {
    readonly name: "month-overlay";
    readonly use: readonly [SlotUse.DatePickerHeader, SlotUse.PassTrough];
}, {
    readonly name: "month-overlay-header";
    readonly use: readonly [SlotUse.DatePickerHeader, SlotUse.PassTrough];
}, {
    readonly name: "year-overlay-header";
    readonly use: readonly [SlotUse.DatePickerHeader, SlotUse.PassTrough];
}, {
    readonly name: "hours-overlay-value";
    readonly use: SlotUse[];
}, {
    readonly name: "hours-overlay-header";
    readonly use: SlotUse[];
}, {
    readonly name: "minutes-overlay-value";
    readonly use: SlotUse[];
}, {
    readonly name: "minutes-overlay-header";
    readonly use: SlotUse[];
}, {
    readonly name: "seconds-overlay-value";
    readonly use: SlotUse[];
}, {
    readonly name: "seconds-overlay-header";
    readonly use: SlotUse[];
}, {
    readonly name: "hours";
    readonly use: readonly [SlotUse.TimeInput, SlotUse.TimePicker, SlotUse.PassTrough];
}, {
    readonly name: "minutes";
    readonly use: readonly [SlotUse.TimeInput, SlotUse.TimePicker, SlotUse.PassTrough];
}, {
    readonly name: "seconds";
    readonly use: readonly [SlotUse.TimeInput, SlotUse.TimePicker, SlotUse.PassTrough];
}, {
    readonly name: "month";
    readonly use: readonly [SlotUse.DatePickerHeader, SlotUse.TimePicker, SlotUse.PassTrough];
}, {
    readonly name: "year";
    readonly use: readonly [SlotUse.DatePickerHeader, SlotUse.TimePicker, SlotUse.PassTrough, SlotUse.YearMode];
}, {
    readonly name: "action-buttons";
    readonly use: readonly [SlotUse.ActionRow];
}, {
    readonly name: "action-preview";
    readonly use: readonly [SlotUse.ActionRow];
}, {
    readonly name: "calendar-header";
    readonly use: readonly [SlotUse.Calendar, SlotUse.PassTrough];
}, {
    readonly name: "marker-tooltip";
    readonly use: readonly [SlotUse.Calendar, SlotUse.PassTrough];
}, {
    readonly name: "action-extra";
    readonly use: readonly [SlotUse.Menu];
}, {
    readonly name: "time-picker-overlay";
    readonly use: readonly [SlotUse.TimePicker, SlotUse.TimePicker, SlotUse.PassTrough];
}, {
    readonly name: "am-pm-button";
    readonly use: readonly [SlotUse.TimePicker, SlotUse.TimeInput, SlotUse.PassTrough];
}, {
    readonly name: "left-sidebar";
    readonly use: readonly [SlotUse.Menu];
}, {
    readonly name: "right-sidebar";
    readonly use: readonly [SlotUse.Menu];
}, {
    readonly name: "month-year";
    readonly use: readonly [SlotUse.DatePickerHeader, SlotUse.PassTrough, SlotUse.MonthPicker, SlotUse.YearPicker];
}, {
    readonly name: "time-picker";
    readonly use: readonly [SlotUse.DatePicker, SlotUse.PassTrough];
}, {
    readonly name: "action-row";
    readonly use: readonly [SlotUse.ActionRow];
}, {
    readonly name: "marker";
    readonly use: readonly [SlotUse.Calendar, SlotUse.PassTrough];
}, {
    readonly name: "quarter";
    readonly use: readonly [SlotUse.QuarterPicker, SlotUse.PassTrough];
}, {
    readonly name: "top-extra";
    readonly use: readonly [SlotUse.DatePickerHeader, SlotUse.PassTrough, SlotUse.MonthPicker, SlotUse.QuarterPicker, SlotUse.YearPicker];
}, {
    readonly name: "tp-inline-arrow-up";
    readonly use: readonly [SlotUse.DatePicker, SlotUse.TimeInput, SlotUse.TimePicker, SlotUse.PassTrough];
}, {
    readonly name: "tp-inline-arrow-down";
    readonly use: readonly [SlotUse.DatePicker, SlotUse.TimeInput, SlotUse.TimePicker, SlotUse.PassTrough];
}, {
    readonly name: "arrow";
    readonly use: readonly [SlotUse.Menu];
}, {
    readonly name: "menu-header";
    readonly use: readonly [SlotUse.Menu];
}];
type SlotItem = (typeof slots)[number];
export type SlotNamesFor<T extends SlotUse> = SlotItem extends infer Item ? Item extends {
    use: readonly SlotUse[];
    name: infer Name;
} ? T extends Item['use'][number] ? Name : never : never : never;
export type ComponentSlots<T extends SlotUse> = Pick<RootSlots, SlotNamesFor<T>>;
export declare const getSlotsByComponent: <T extends SlotUse>(rootSlots: Slots, use: T) => Array<SlotNamesFor<T>>;
export declare const getAllSlots: (componentSlots: Slots, presetDates: PresetDate[]) => any;
export type YearModeSlots = ComponentSlots<SlotUse.YearMode>;
export type DatePickerHeaderSlots = ComponentSlots<SlotUse.DatePickerHeader>;
export type CalendarSlots = ComponentSlots<SlotUse.Calendar>;
export type DatePickerSlots = ComponentSlots<SlotUse.DatePicker> & DatePickerHeaderSlots & CalendarSlots & TimePickerSlots;
export type TimePickerSlots = ComponentSlots<SlotUse.TimePicker> & TimeInputSlots;
export type TimeInputSlots = ComponentSlots<SlotUse.TimeInput>;
export type QuarterPickerSlots = ComponentSlots<SlotUse.QuarterPicker> & YearModeSlots;
export type YearPickerSlots = ComponentSlots<SlotUse.YearPicker>;
export type ActionRowSlots = ComponentSlots<SlotUse.ActionRow>;
export type MenuSlots = ComponentSlots<SlotUse.Menu> & ActionRowSlots;
export {};
