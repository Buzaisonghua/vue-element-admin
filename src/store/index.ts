import { createPinia } from 'pinia'
import type { App } from 'vue'

const store = createPinia()

// 全局注册 store
export default function setupStore(app: App<Element>) {
  app.use(store)
}

export * from './modules/user'
export * from './modules/app'
export * from './modules/routes'
export * from './modules/settings'
export * from './modules/tags'
export { store }
