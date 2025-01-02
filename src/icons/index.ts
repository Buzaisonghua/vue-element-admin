import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import SvgIcon from './SvgIcon.vue'

// 注册所有图标
export function setupElIcons(app: App<Element>) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
export function setupIcons(app: App<Element>) {
  app.component('SvgIcon', SvgIcon)
}
