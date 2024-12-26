import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { URL, fileURLToPath } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { VueHooksPlusResolver } from '@vue-hooks-plus/resolvers'

import path from 'path'

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following method:
// port = 9527 npm run dev OR npm run dev --port = 9527
const port = process.env.port || process.env.npm_config_port || 9527 // dev port

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
    },
  },
  server: {
    host: '0.0.0.0',
    port: +port,
    open: true,
    proxy: {
      // 代理 /dev-api 的请求
      '/api': {
        changeOrigin: true,
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/main.scss" as *;',
      },
    },
  },
  plugins: [
    vue(),

    mockDevServerPlugin(),

    createSvgIconsPlugin({
      customDomId: 'svg_icons_',
      inject: 'body-last',
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
    }),

    // 自动导入配置 https://github.com/sxzz/element-plus-best-practices/blob/main/vite.config.ts
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'pinia',
        '@vueuse/head',
        '@vueuse/core',
        {
          'driver.js': [
            'driver', // import { useMouse } from '@vueuse/core',
          ],
        },
      ],
      vueTemplate: true,
      resolvers: [
        // 导入 Element Plus函数，如：ElMessage, ElMessageBox 等
        ElementPlusResolver(),
        VueHooksPlusResolver(),
      ],
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      // 导入函数类型声明文件路径 (false:关闭自动生成)
      // dts: false,
      dts: 'types/auto-imports.d.ts',
    }),
    Components({
      resolvers: [
        // 导入 Element Plus 组件
        ElementPlusResolver(),
      ],
      // 指定自定义组件位置(默认:src/components)
      dirs: ['src/components', 'src/**/components'],
      // 导入组件类型声明文件路径 (false:关闭自动生成)
      dts: 'types/components.d.ts',
    }),
  ],
})
