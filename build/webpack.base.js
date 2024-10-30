const { VueLoaderPlugin } = require("vue-loader")
const { resolve } = require("./utils")

module.exports = {
    devtool: "source-map",
    target: "web",
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"],
                sideEffects: true,
            },
            {
                test: /\.(svg|gif|png|jpe?g)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                       // 限制大小为10kb以下使用该loader, 超出使用file-loader
                       limit: 10*1024, 
                       //关闭url-loader的es6模块化解析，使用commonjs
                       esModule: false,
                       name: '[name].[hash:10].[ext]',
                       //把打包的图片资源输出到image下
                       outputPath: 'images'
                    },
                 },
            },
            {
                test: /\.ts$/,
                loader: "esbuild-loader",
                include: [resolve("src")],
                exclude: /node_modules/,
                options: {
                  loader: "ts",
                  target: "esnext",
                }
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: [".js", ".ts", ".vue", ".json"],
        alias: {
            "@": resolve("src")
        },
        modules: ["node_modules"],
    },
}