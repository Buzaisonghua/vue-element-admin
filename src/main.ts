import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '@/router'
// icons
import 'virtual:svg-icons-register'
import SvgIcon from './icons/SvgIcon.vue'

// svg
import './icons'
// 路由守卫
import './permission'

import '@/styles/index.scss'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.component('SvgIcon', SvgIcon)
app.mount('#app')
