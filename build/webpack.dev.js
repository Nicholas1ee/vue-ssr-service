// @ts-nocheck
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.js')
const { resolve } = require('./utils');

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: resolve('src/main.ts'),
    output: {
        path: resolve('dist'),
        filename: 'index.js',
        chunkFilename: '[id].js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "vue-ssr-service",
            filename: "index.html",
            template: resolve("public/index.html"),
        }),
    ],
    devServer: {
        hot: true,
        open: false,
        host: 'localhost',
        port: 8080 //'origin'
    }
})