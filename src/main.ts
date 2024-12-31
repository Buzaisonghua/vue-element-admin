import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import setupRouter from '@/router'
import i18n from '@/languages'
// icons
import 'virtual:svg-icons-register'
import SvgIcon from './icons/SvgIcon.vue'
// svg
import './icons'
// 路由守卫
import '@/styles/index.scss'

const app = createApp(App)
setupRouter(app)
app.use(createPinia())
app.use(i18n)
app.component('SvgIcon', SvgIcon)
app.mount('#app')
