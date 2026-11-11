import { h } from 'vue';
import type { Component, FunctionalComponent, SVGAttributes } from 'vue';

import CalendarIconSource from './svg/calendar.svg?sprite';
import CancelIconSource from './svg/cancel.svg?sprite';
import ChevronLeftIconSource from './svg/chevron-left.svg?sprite';
import ChevronRightIconSource from './svg/chevron-right.svg?sprite';
import ClockIconSource from './svg/clock.svg?sprite';
import ChevronUpIconSource from './svg/chevron-up.svg?sprite';
import ChevronDownIconSource from './svg/chevron-down.svg?sprite';

const defaultAttrs: SVGAttributes = {
    fill: 'currentColor',
    class: 'dp--icon',
    role: 'img',
    'aria-hidden': 'true',
};

type IconComponent = FunctionalComponent<SVGAttributes>;

function withDefaults(source: Component): IconComponent {
    return (props = {}, context) => {
        const attrs = context?.attrs ?? {};
        const className = [defaultAttrs.class, (props as SVGAttributes).class, attrs.class].filter(Boolean);
        return h(source, {
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
