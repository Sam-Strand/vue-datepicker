// стили подключаются только через слой vendor (см. assets/css/vendor.css)
import './assets/css/vendor.css';

export { default as VueDatePicker } from './VueDatePickerRoot.vue';
export { TZDate } from '@date-fns/tz';
export { WeekStart } from './constants';
export * from './types';
