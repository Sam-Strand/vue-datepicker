import { EmitFn } from 'vue';
import { TimeInternalModel } from '../../types';
export interface TimePickerEmits {
    'time-update': [];
}
export declare const useTimePicker: (emit: EmitFn<TimePickerEmits>) => {
    modelValue: import('vue').WritableComputedRef<import('../..').InternalModelValue, import('../..').InternalModelValue>;
    time: any;
    disabledTimesConfig: import('vue').ComputedRef<(ind: number, hoursVal?: number) => {
        hours: number[];
        minutes: undefined;
        seconds: undefined;
    } | {
        hours: never[];
        minutes: number[];
        seconds: (number | undefined)[];
    }>;
    validateTime: (type: import('../..').TimeKey, value: number | number[]) => boolean;
    updateTime: (values: TimeInternalModel) => void;
};
