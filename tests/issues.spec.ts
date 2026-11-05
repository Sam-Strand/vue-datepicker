import { describe, expect, it, vi, afterEach } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import { h } from 'vue';
import { TZDate } from '@date-fns/tz';

import VueDatePickerRoot from '../VueDatePickerRoot.vue';
import DatepickerInput from '../components/DatePickerInput/DatepickerInput.vue';
import { openMenu } from './tests-utils';

afterEach(() => {
  vi.useRealTimers();
});

/** Текст в колонке часов (кнопка-переключатель оверлея показывает текущее значение) */
const hoursText = (dp: ReturnType<typeof mount>) =>
  dp.find('[data-test-id="hours-toggle-overlay-btn-0"]').text();

describe('Открытые issue апстрима', () => {
  it('#1311: стрелка часов не перескакивает через несуществующий час при переходе на летнее время', async () => {
    // 29.03.2026 в Europe/Berlin 02:00 не существует: 01:00 + 1 час должно дать 02:00, а не 03:00
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2026-03-29T00:30:00Z'));

    const dp = await openMenu({
      modelValue: new TZDate(2026, 2, 15, 1, 0, 'Europe/Berlin'),
      timezone: 'Europe/Berlin',
      timeConfig: { enableTimePicker: true, timePickerInline: true },
    });

    expect(hoursText(dp)).toBe('01');

    await dp.find('[data-test-id="hours-time-inc-btn-0"]').trigger('click');

    expect(hoursText(dp)).toBe('02');
  });

  it('#1281: selectCurrentDate из слота action-extra применяет дату при auto-apply', async () => {
    const dp = mount(VueDatePickerRoot, {
      props: { autoApply: true },
      slots: {
        'action-extra': (params: { selectCurrentDate: () => void }) =>
          h('button', { 'data-test-id': 'select-now', onClick: params.selectCurrentDate }, 'now'),
      },
    });

    dp.vm.openMenu();
    await flushPromises();

    await dp.find('[data-test-id="select-now"]').trigger('click');

    const emitted = dp.emitted('update:model-value');
    expect(emitted).toBeTruthy();
    expect(emitted!.at(-1)![0]).toBeInstanceOf(Date);
  });

  it('#1309: при очистке значения в открытом меню время берётся из startTime', async () => {
    // «Сейчас» — 14:34, startTime — 00:00: после очистки должно быть 00, а не текущее время
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2026-05-01T14:34:24'));

    const dp = await openMenu({
      modelValue: new Date(2026, 4, 20, 1, 1, 1),
      textInput: true,
      timeConfig: { enableTimePicker: true, timePickerInline: true, startTime: { hours: 0, minutes: 0, seconds: 0 } },
    });

    expect(hoursText(dp)).toBe('01');

    await dp.find('input').setValue('');
    await flushPromises();

    expect(hoursText(dp)).toBe('00');
  });

  it('#1309 (только время): при пустой модели время берётся из startTime', async () => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2026-05-01T14:34:24'));

    const dp = await openMenu({
      timePicker: true,
      modelValue: null,
      timeConfig: { startTime: { hours: 0, minutes: 0, seconds: 0 } },
    });

    expect(hoursText(dp)).toBe('00');
  });

  it('#1280: applyOnBlur не сбрасывает выбранную дату при клике внутри меню', async () => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2026-05-01T10:00:00'));

    const date = new Date(2026, 4, 20, 10, 0, 0);
    const dp = await openMenu({ modelValue: date, textInput: { applyOnBlur: true } });

    // Клик по стрелке времени снимает фокус с поля, но текст в поле не менялся
    await dp.find('input').trigger('blur');
    await flushPromises();

    const input = dp.findComponent(DatepickerInput);
    expect(input.emitted('set-input-date')).toBeUndefined();
    expect(input.emitted('select-date')).toBeUndefined();
  });
});
