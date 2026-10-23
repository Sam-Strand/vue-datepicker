export declare const useContext: () => {
    rootProps: import('..').RootPropsWithDefaults;
    defaults: ReturnType<typeof import('./useDefaults').useDefaults>;
    setState: <T extends keyof import('../composables/useInjector').State>(key: T, value: import('../composables/useInjector').State[T]) => void;
    state: Readonly<import('../composables/useInjector').State>;
    modelValue: import('vue').WritableComputedRef<import('..').InternalModelValue>;
    rootEmit: import('vue').EmitFn<import('..').RootEmits>;
    calendars: import('vue').Ref<import('..').CalendarMonthYear[]>;
    time: import('vue').Reactive<any>;
    month: import('vue').ComputedRef<(instance: number) => number>;
    year: import('vue').ComputedRef<(instance: number) => number>;
    today: Date;
    inputValue: import('vue').Ref<string>;
    updateTime: () => void;
    getDate: import('..').DateGetter;
    getDateFromParts: (year: number, month: number, day?: number) => Date;
};
export declare const useFlowContext: () => {
    updateFlowStep: (step: import('..').PickerSection) => void;
    childMount: (child?: import('../constants').CMP) => void;
    flowStep: Readonly<import('vue').Ref<import('..').PickerSection | undefined>>;
};
