import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import setupRouter from '@/router'
import i18n from '@/languages'
// icons
import 'virtual:svg-icons-register'
import { setupElIcons, setupIcons } from '@/icons'
// 路由守卫
import '@/styles/index.scss'

const app = createApp(App)
setupRouter(app)
setupElIcons(app)
setupIcons(app)
app.use(createPinia())
app.use(i18n)
app.mount('#app')
