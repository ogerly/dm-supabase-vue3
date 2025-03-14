import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { nextTick } from 'vue'

// Import all locale files
import enUS from '../locales/en-US.yml'
import zhCN from '../locales/zh-CN.yml'
import deDE from '../locales/de-DE.yml'

// Export the supported locales for use in other files
export const availableLocales = ['en-US', 'de-DE', 'zh-CN']

export function setupI18n(options = { locale: 'en-US' }) {
  const i18n = createI18n({
    legacy: false, // you must set `false`, to use Composition API
    locale: options.locale,
    fallbackLocale: 'en-US',
    messages: {
      'en-US': enUS,
      'zh-CN': zhCN,
      'de-DE': deDE
    }
  })
  
  return i18n
}

// This function helps us switch locales at runtime
export async function setI18nLanguage(i18n, locale) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    i18n.global.locale.value = locale
  }
  
  // Set document language attribute
  document.querySelector('html')?.setAttribute('lang', locale)
}

// Create i18n instance
const i18n = setupI18n({
  locale: localStorage.getItem('preferredLanguage') || 'en-US'
})

// Export the i18n instance for use in the useLanguage composable
export { i18n }

// Plugin installation function
const install = (app: App) => {
  app.use(i18n)
  
  // Set initial document language
  setI18nLanguage(i18n, i18n.global.locale.value)
}

export default install
