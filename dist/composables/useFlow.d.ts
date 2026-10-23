import { Ref, InjectionKey, EmitFn } from 'vue';
import { CMP } from '../constants';
import { PickerSection } from '../types';
export declare const FlowKey: InjectionKey<{
    updateFlowStep: (step: PickerSection) => void;
    childMount: (child?: CMP) => void;
    flowStep: Readonly<Ref<PickerSection | undefined>>;
}>;
export declare const useFlow: (dynCmpRef: Ref, emit: EmitFn<{
    "auto-apply": [ignoreClose?: boolean];
}>) => {
    executeFlow: (step?: PickerSection) => void;
};
