import configVue from 'vite-preset/vue'
import vueSvg from 'vite-vue-svg'

export default configVue({
  plugins: [vueSvg()],
  test: {
    environment: 'jsdom',
  },
})
