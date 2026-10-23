import { MAP_KEY_FORMAT } from '../constants';
import { Config, DPElements, InternalModelValue, SelectItem, TimeInternalModel, TimeModel } from '../types';
export declare const useHelperFns: () => {
    getMapKey: (date: Date | string | number, mapKeyFormat?: MAP_KEY_FORMAT) => string;
    getMapKeyType: (monthPicker: boolean | undefined, yearPicker: boolean | undefined) => MAP_KEY_FORMAT;
    getMapDate: <T>(date: Date, map: Map<string, T>, format?: MAP_KEY_FORMAT) => T | undefined;
    convertType: <T>(val: any) => T;
    getNumVal: (num?: string | number | null) => number | null;
    findNextFocusableElement: (startingElement: HTMLElement, reverse: boolean) => HTMLElement | undefined;
    padZero: (val: number) => string;
    getElWithin: (wrapper: HTMLElement | null, attribute: DPElements) => HTMLElement | undefined | null;
    checkStopPropagation: (ev: Event | undefined, config: Config, immediate?: boolean) => void;
    checkKeyDown: (ev: KeyboardEvent, fn: () => any, prevent?: boolean, spaceConfirm?: boolean, cb?: (ev: KeyboardEvent) => void) => any;
    handleEventPropagation: (ev: KeyboardEvent, config: Config) => void;
    findFocusableEl: (container: HTMLElement | null) => HTMLElement | undefined;
    isTouchDevice: () => boolean;
    hoursToAmPmHours: (index: number) => number;
    getGroupedList: (items: SelectItem[]) => SelectItem[][];
    setTimeModelValue: (time: TimeInternalModel, modelValue: InternalModelValue, fallbackDate: Date, isRange: boolean) => void;
    getTimeObjFromCurrent: (date: Date, obj: TimeModel | Record<string, string | number>, enableSeconds: boolean) => TimeModel;
    errorMapper: {
        prop: (name: string) => string;
        dateArr: (name: string) => string;
    };
};
