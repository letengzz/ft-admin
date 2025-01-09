import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'

import { useRouter } from './router'

const app = createApp(App)

app.use(createPinia())
useRouter(app)

app.mount('#app')
