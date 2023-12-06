import { createApp } from 'vue'

import './style.css'
import App from './App.vue'

import { router } from './router/index.router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

let AppInit = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

AppInit.use(router)
AppInit.use(pinia)

AppInit.mount('#app')
