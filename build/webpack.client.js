// @ts-nocheck
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const { resolve } = require('./utils.js')

module.exports = merge(baseConfig, {
    mode: 'production',
    entry: resolve('src/entry/client.ts'),
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.ssr.html",
            template: resolve('public/index.ssr.html'),
            inject: false,
            minify: {
              collapseWhitespace: true,
              removeAttributeQuotes: true,
            },
            // chunksSortMode: 'dependency'
        }),
        new VueSSRClientPlugin(),
    ],
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 20000,
            minChunks: 1,
            maxAsyncRequests: 1,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: 1,
                },
                default: {
                    minChunks: 2,
                    priority: -1,
                    reuseExistingChunk: true,
                },
            },
        },
    },
})