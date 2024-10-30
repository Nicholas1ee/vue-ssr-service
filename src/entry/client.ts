import { createApp } from '../app'

const { app, router } = createApp()
router.onReady(() => {
    console.log();
    app.$mount('#app')
})
