const path = require("path");
//const glob = require("glob");
const glob = require("glob-all");
const _MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const _StyleLintPlugin = require("stylelint-webpack-plugin");
const _ESLintPlugin = require("eslint-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const _CopyPlugin = require("copy-webpack-plugin");
const _PurgeCSSPlugin = require("purgecss-webpack-plugin");

const PurgecssPlugin = new _PurgeCSSPlugin({
  paths: glob.sync([
    path.resolve(__dirname, "../src/site/views/*phtml"),
    path.resolve(__dirname, "../src/admin/views/*phtml"),
  ]),
});

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: "css/[name].css",
  chunkFilename: "[id].css",
});

const ESLintPlugin = new _ESLintPlugin({
  overrideConfigFile: path.resolve(__dirname, ".eslintrc"),
  context: path.resolve(__dirname, "../src/**/*"),
  files: "**/*.js",
});

// const StyleLintPlugin = new _StyleLintPlugin({
//   configFile: path.resolve(__dirname, "stylelint.config.js"),
//   //configBasedir: path.resolve(__dirname, "./node_modules/"),
//   context: path.resolve(__dirname, "../src/**/*"),
//   files: "**/*.scss",
//   syntax: "scss",
// });

/**
 * If getting an error during npm start or watch it's
 * most posable because the src/fonts or src/img folders are empty
 */
const CopyPlugin = new _CopyPlugin({
  patterns: [
    {
      from: path.resolve(__dirname, "../src/favicon/"),
      to: path.resolve(__dirname, "../../project/public/favicon/"),
    },
    {
      from: path.resolve(__dirname, "../src/img/"),
      to: path.resolve(__dirname, "../../project/public/img/"),
    },
    {
      from: path.resolve(__dirname, "../src/fonts/"),
      to: path.resolve(__dirname, "../../project/public/fonts/"),
    },
    {
      from: path.resolve(__dirname, "../src/index.php"),
      to: path.resolve(__dirname, "../../project/public/index.php"),
    },
  ],
});

module.exports = {
  CleanWebpackPlugin: new CleanWebpackPlugin(),
  MiniCssExtractPlugin: MiniCssExtractPlugin,
  PurgecssPlugin: PurgecssPlugin,
  ESLintPlugin: ESLintPlugin,
  //StyleLintPlugin: StyleLintPlugin,
  CopyPlugin: CopyPlugin,
};
