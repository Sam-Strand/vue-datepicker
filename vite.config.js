import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap'
import configVue from 'vite-preset/vue'

export default configVue({
  plugins: [
    VitePluginSvgSpritemap('./src/components/Icons/svg/*.svg'),
  ],
  test: {
    environment: 'jsdom',
  },
})
