const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { resolve } = require('./utils.js')

module.exports = merge(baseConfig, {
    mode: 'production',
    entry: resolve('src/entry/client.ts'),
    output: {
        path: resolve('dist/client'),
        filename: 'index.js',
        chunkFilename: '[id].js',
        publicPath: '/client/',
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    plugins: [
        // 此插件在输出目录中,生成 `vue-ssr-client-manifest.json`。
        new VueSSRClientPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template:  resolve("public/index.html"),
            // inject: 'body',
            inject: false,
            chunks: ["index"],
            minify: {
              // 压缩的方式
              // removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true,
            },
            // chunksSortMode: 'dependency'
        }),
    ]
})