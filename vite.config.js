import { readFileSync, statSync, realpathSync } from 'node:fs'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// Подпути не вшиваются в сборку: их подключает и дедуплицирует сборщик приложения
const external = ['vue', 'date-fns', '@date-fns/tz', '@floating-ui/vue', '@vueuse/core']

// @vitejs/plugin-vue не передаёт fs в compileScript, а без него @vue/compiler-sfc
// не может разобрать типы, импортированные из других файлов (defineProps<RootProps>)
const scriptFs = {
    // как ts.sys.fileExists: иначе resolveExt примет каталог за модуль
    fileExists: file => {
        try {
            return statSync(file).isFile()
        } catch {
            return false
        }
    },
    readFile: file => readFileSync(file, 'utf-8'),
    realpath: file => {
        try {
            return realpathSync(file)
        } catch {
            return file
        }
    }
}

export default defineConfig({
    plugins: [
        vue({ script: { fs: scriptFs } }),
        dts()
    ],
    build: {
        lib: {
            entry: 'src/index.ts',
            formats: ['es']
        },
        rollupOptions: {
            external: id => external.some(name => id === name || id.startsWith(`${name}/`)),
            output: {
                exports: 'named'
            }
        }
    }
})
