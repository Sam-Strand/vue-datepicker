declare module '*.svg?sprite' {
    import type { FunctionalComponent, SVGAttributes } from 'vue'
    const src: FunctionalComponent<SVGAttributes>
    export default src
}
