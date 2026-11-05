import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// Подпути не вшиваются в сборку: их подключает и дедуплицирует сборщик приложения
const external = ['vue', 'date-fns', '@date-fns/tz', '@floating-ui/vue', '@vueuse/core']

export default defineConfig({
    plugins: [
        vue(),
        dts()
    ],
    build: {
        lib: {
            entry: 'src/index.ts',
            formats: ['es'],
            fileName: 'vue-datepicker',
            cssFileName: 'vue-datepicker'
        },
        rollupOptions: {
            external: id => external.some(name => id === name || id.startsWith(`${name}/`)),
            output: {
                exports: 'named'
            }
        }
    }
})
