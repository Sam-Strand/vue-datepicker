import { ModelValue } from '../types';
export declare const useExternalInternalMapper: () => {
    checkBeforeEmit: () => boolean;
    parseExternalModelValue: (value: ModelValue) => void;
    formatInputValue: () => void;
    emitModelValue: () => void;
};
