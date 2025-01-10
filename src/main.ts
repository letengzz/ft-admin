import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'

import { useRouter } from './router'
import { usePinia } from './stores'
// 引入全局样式
import '@/styles/index.scss'
// 引入 uno.css
import 'virtual:uno.css'

const app = createApp(App)

app.use(createPinia())
useRouter(app)
usePinia(app)

app.mount('#app')
