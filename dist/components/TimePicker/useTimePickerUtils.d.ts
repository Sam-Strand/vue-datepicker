import { TimeInternalModel, TimeKey, TimeModel } from '../../types';
export declare const useTimePickerUtils: () => {
    assignTime: (property: TimeKey, value: number | number[]) => void;
    updateHours: (value: number | number[]) => void;
    updateMinutes: (value: number | number[]) => void;
    updateSeconds: (value: number | number[]) => void;
    getSetDateTime: (dateValue?: Date | null, i?: number) => Date;
    updateTimeValues: (values: TimeInternalModel, handleTimeUpdate: (date: Date | Date[]) => void) => void;
    getSecondsValue: (i?: number) => number;
    assignStartTime: (startTime: TimeModel | TimeModel[] | null) => void;
    validateTime: (type: TimeKey, value: number | number[]) => boolean;
    disabledTimesConfig: import('vue').ComputedRef<(ind: number, hoursVal?: number) => {
        hours: number[];
        minutes: undefined;
        seconds: undefined;
    } | {
        hours: never[];
        minutes: number[];
        seconds: (number | undefined)[];
    }>;
};
