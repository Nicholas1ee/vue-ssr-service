import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router/index'
import { PiniaVuePlugin, createPinia } from 'pinia'

import './styles/reset.css'
import 'tailwindcss/tailwind.css'

Vue.use(PiniaVuePlugin);

export function createApp() {
    const router = createRouter()
    const pinia = createPinia()
    const app = new Vue({
        router,
        pinia,
        render: (h: Function) => h(App)
    })

    return { app, router, pinia }
}