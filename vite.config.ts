import { defineConfig, UserConfig } from 'vite'
import { resolve } from 'path'
import Vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'

import dts from 'vite-plugin-dts'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import VueDevTools from 'vite-plugin-vue-devtools'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  let userConfig: UserConfig = {}

  // Base URL for GitHub Pages deployment
  const base = '/dm-supabase-vue3/'

  // Development mode CSS configuration
  const cssConfig =
    mode !== 'lib'
      ? {
          css: {
            postcss: {
              plugins: [tailwind(), autoprefixer()]
            }
          }
        }
      : {}

  const commonPlugins = [
    Vue(),
    VueDevTools(),
    Components({
      resolvers: [
        IconsResolver({
          prefix: ''
        })
      ]
    }),
    Icons(),
    VueI18nPlugin({
      include: [resolve(__dirname, 'src/locales/**')]
    })
  ]

  if (mode === 'lib') {
    userConfig.build = {
      lib: {
        entry: resolve(__dirname, 'packages/index.ts'),
        name: 'AuthUIVue',
        fileName: 'auth-ui-vue'
      },
      outDir: 'lib',
      emptyOutDir: true,
      sourcemap: false,
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    }
    userConfig.plugins = [
      ...commonPlugins,
      dts({
        include: './packages'
      })
      // libInjectCss()
    ]
  }

  return {
    base, // Make sure base URL is applied to all assets
    ...cssConfig,
    resolve: {
      alias: {
        '@': resolve(__dirname, 'packages'),  // Fix: removed leading slash
        '~': resolve(__dirname, 'src')        // Fix: removed leading slash
      }
    },
    plugins: [...commonPlugins],
    ...userConfig
  }
})
