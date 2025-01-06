import { createI18n } from 'vue-i18n'
import { useAppStoreHook } from '@/store'

// 本地语言包
import enLocale from './package/en'
import zhLocale from './package/zh'
import { App } from 'vue'

const messages = {
  ZH: {
    ...zhLocale,
  },
  EN: {
    ...enLocale,
  },
}
const i18n = createI18n({
  legacy: false,
  locale: useAppStoreHook().getLanguage,
  messages: messages,
  globalInjection: true,
})

// 全局注册 i18n
export function setupI18n(app: App<Element>) {
  app.use(i18n)
}

export default i18n
