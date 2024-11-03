// @ts-nocheck
const { merge } = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.js')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const { resolve } = require('./utils');

module.exports = merge(baseConfig, {
    mode: 'production',
    target: 'node',
    entry: resolve('src/entry/server.ts'),
    output: {
        libraryTarget: 'commonjs2',
    },
    // 外置化应用程序依赖模块。可以使服务器构建速度更快，
    // 并生成较小的 bundle 文件。
    externals: nodeExternals({
        // 不要外置化 webpack 需要处理的依赖模块。
        // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
        // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
        allowlist: /\.css$/
    }),
    plugins: [
        new VueSSRServerPlugin(),
    ]
})