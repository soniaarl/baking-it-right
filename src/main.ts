import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import SanityFetcher from './components/SanityFetcher.vue'

const app = createApp(App)

app.component('SanityFetcher', SanityFetcher)
app.use(createPinia())
app.use(router)

app.mount('#app')
