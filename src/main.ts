import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia";
import router from '@/router'

// 路由守卫
import './permission'

import '@/styles/index.scss'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')