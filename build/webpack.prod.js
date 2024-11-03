// @ts-nocheck
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.js')
const { resolve } = require('./utils');

module.exports = merge(baseConfig, {
    mode: 'production',
    entry: resolve('src/main.ts'),
    output: {
        path: resolve('dist/csr'),
        filename: 'index.js',
        chunkFilename: '[id].js',
        clean: true,
        publicPath: './',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "vue-ssr-service",
            filename: "index.html",
            template: resolve("public/index.html"),
        }),
    ],
})