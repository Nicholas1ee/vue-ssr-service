import { createApp } from '../app'

const clientRender = () => {
    const { app, router, pinia } = createApp()
    

    if (window.__INITIAL_STATE__) {
        pinia.state.value = window.__INITIAL_STATE__
    }

    window.__pinia = pinia

    router.onReady(() => {
        app.$mount('#app', true)
    })
}

clientRender()