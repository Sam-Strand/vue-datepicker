import { MenuView, MonthModel, PickerSection } from '../types';
import { ShallowRef } from 'vue';
import { default as VueDatePicker } from '../VueDatePicker.vue';
export declare const useExposed: (datePicker: Readonly<ShallowRef<InstanceType<typeof VueDatePicker>>>) => {
    openMenu: () => void;
    closeMenu: () => void;
    selectDate: () => void;
    clearValue: () => void;
    formatInputValue: () => void;
    updateInternalModelValue: (value: Date | Date[]) => void;
    setMonthYear: (value: Partial<MonthModel>, instance?: number) => void;
    parseModel: () => void;
    switchView: (view: MenuView, instance?: number) => void;
    executeFlow: (step?: PickerSection) => void;
    toggleMenu: () => void;
    dpMenuRef: () => any;
    dpWrapMenuRef: () => Readonly<ShallowRef<HTMLDivElement | null, HTMLDivElement | null>>;
    inputRef: () => any;
};
