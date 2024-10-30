import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router/index'

export function createApp() {
    const router = createRouter()

    const app = new Vue({
        router,
        render: (h: Function) => h(App)
    })

    return { app, router }
}