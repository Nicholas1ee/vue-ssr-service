import { createApp } from '../app'

export default (context: any) => {
    return new Promise((resolve, reject) => {
        const { app, router, pinia } = createApp()
        // 设置服务器端 router 的位置
        router.push(context.url)
        context.state = pinia.state.value

        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()
            // 匹配不到的路由，执行 reject 函数，并返回 404
            if (!matchedComponents.length) {
                return reject({ code: 404, msg: '匹配不到的路由' })
            }

            resolve(app)
        }, reject)
    })
}