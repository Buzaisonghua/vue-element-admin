import { createApp } from 'vue'
import App from './App.vue'
import setupRouter from '@/router'
import setupStore from '@/store'
import { setupI18n } from '@/languages'
import { setupElIcons, setupIcons } from '@/icons'
import 'virtual:svg-icons-register'

import '@/styles/index.scss'
import 'uno.css'

const app = createApp(App)
setupElIcons(app)
setupIcons(app)
setupRouter(app)
setupStore(app)
setupI18n(app)
app.mount('#app')
