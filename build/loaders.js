const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 *
 * @param {*} type 样式文件是css or scss
 * @param {*} extract 是否单独提取css文件
 */

function getStyleLoaders(type, extract) {
  const cssFinalLoader = extract
    ? { loader: MiniCssExtractPlugin.loader }
    : { loader: require.resolve("vue-style-loader") };

  const rules = [
    cssFinalLoader,
    {
      loader: require.resolve("css-loader"),
      options: {
        importLoaders: 2,
      },
    },
  ];

  if (type === "scss") {
    rules.push({
      loader: require.resolve("sass-loader"),
      options: { ...preOptions },
    });
  }

  return rules;
}

module.exports = {
  getStyleLoaders,
};
