import { Marker } from '../types/picker';
import { Hour12, InputParsedDate, InternalModelValue, PickerSection } from '../types/generic';
export interface RootEmits {
    'update:model-value': [value: any];
    'internal-model-change': [value: InternalModelValue];
    'text-submit': [];
    'text-input': [event: Event | string, parsedDate: InputParsedDate];
    open: [];
    closed: [];
    focus: [];
    blur: [];
    cleared: [];
    'flow-step': [step: PickerSection];
    'update-month-year': [value: {
        instance: number;
        month: number;
        year: number;
    }];
    'invalid-select': [];
    'invalid-fixed-range': [date: Date];
    'invalid-date': [date: Date];
    'tooltip-open': [marker: Marker];
    'tooltip-close': [marker: Marker];
    'am-pm-change': [value: Hour12];
    'range-start': [date: Date];
    'range-end': [date: Date];
    'date-click': [date: Date];
    'overlay-toggle': [toggle: {
        open: boolean;
        overlay: PickerSection;
    }];
    invalid: [event: Event];
    'menu-mounted': [el: HTMLElement];
    'menu-unmounted': [el: HTMLElement];
}
