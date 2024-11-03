import { createApp } from './app'
import { Pinia } from 'pinia'

const { app, router, pinia } = createApp()

router.onReady(() => {
    window.__pinia = pinia
    app.$mount('#app')
})
