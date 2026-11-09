import { h } from 'vue';
import type { Component, FunctionalComponent, SVGAttributes } from 'vue';

import CalendarIconSource from './svg/calendar.svg?use';
import CancelIconSource from './svg/cancel.svg?use';
import ChevronLeftIconSource from './svg/chevron-left.svg?use';
import ChevronRightIconSource from './svg/chevron-right.svg?use';
import ClockIconSource from './svg/clock.svg?use';
import ChevronUpIconSource from './svg/chevron-up.svg?use';
import ChevronDownIconSource from './svg/chevron-down.svg?use';

const defaultAttrs: SVGAttributes = {
    fill: 'currentColor',
    class: 'dp--icon',
    role: 'img',
    'aria-hidden': 'true',
};

type IconComponent = FunctionalComponent<SVGAttributes>;

function withDefaults(source: IconComponent): IconComponent {
    return (props = {}, { attrs = {} }) => {
        const className = [defaultAttrs.class, (props as SVGAttributes).class, attrs.class].filter(Boolean);
        return h(source as Component, {
            ...defaultAttrs,
            ...props,
            ...attrs,
            class: className,
        });
    };
}

export const CalendarIcon = withDefaults(CalendarIconSource);
export const CancelIcon = withDefaults(CancelIconSource);
export const ChevronLeftIcon = withDefaults(ChevronLeftIconSource);
export const ChevronRightIcon = withDefaults(ChevronRightIconSource);
export const ClockIcon = withDefaults(ClockIconSource);
export const ChevronUpIcon = withDefaults(ChevronUpIconSource);
export const ChevronDownIcon = withDefaults(ChevronDownIconSource);
