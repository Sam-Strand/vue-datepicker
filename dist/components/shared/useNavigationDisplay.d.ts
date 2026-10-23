import { PickerSection } from '../../types';
export declare const useNavigationDisplay: () => {
    hideNavigationButtons: import('vue').ComputedRef<(key: PickerSection) => boolean>;
    showLeftIcon: import('vue').ComputedRef<(instance: number) => boolean>;
    showRightIcon: import('vue').ComputedRef<(instance: number) => boolean>;
};
