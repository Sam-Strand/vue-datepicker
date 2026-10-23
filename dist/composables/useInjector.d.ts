import { Ref, InjectionKey, WritableComputedRef, EmitFn, Reactive, ComputedRef } from 'vue';
import { useDefaults } from '../composables';
import { CalendarMonthYear, DateGetter, InternalModelValue, RootEmits, RootPropsWithDefaults } from '../types';
export interface State {
    menuFocused: boolean;
    shiftKeyInMenu: boolean;
    isInputFocused: boolean;
    isTextInputDate: boolean;
    arrowNavigationLevel: number;
}
export declare const ContextKey: InjectionKey<{
    rootProps: RootPropsWithDefaults;
    defaults: ReturnType<typeof useDefaults>;
    setState: <T extends keyof State>(key: T, value: State[T]) => void;
    state: Readonly<State>;
    modelValue: WritableComputedRef<InternalModelValue>;
    rootEmit: EmitFn<RootEmits>;
    calendars: Ref<CalendarMonthYear[]>;
    time: Reactive<any>;
    month: ComputedRef<(instance: number) => number>;
    year: ComputedRef<(instance: number) => number>;
    today: Date;
    inputValue: Ref<string>;
    updateTime: () => void;
    getDate: DateGetter;
    getDateFromParts: (year: number, month: number, day?: number) => Date;
}>;
export declare const useInjector: (props: RootPropsWithDefaults, emit: EmitFn<RootEmits>) => void;
