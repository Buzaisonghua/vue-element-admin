import { App } from 'vue'
import { createI18n } from 'vue-i18n'

// 本地语言包
import enLocale from './package/en'
import zhLocale from './package/zh'
import { useAppStoreHook } from '@/store'

const messages = {
  ZH: {
    ...zhLocale
  },
  EN: {
    ...enLocale
  }
}
const i18n = createI18n({
  legacy: false,
  locale: useAppStoreHook().getLanguage,
  messages,
  globalInjection: true
})

// 全局注册 i18n
export function setupI18n(app: App<Element>) {
  app.use(i18n)
}

export default i18n
