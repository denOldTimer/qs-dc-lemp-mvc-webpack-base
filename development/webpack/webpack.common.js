const path = require("path");
const webpack = require("webpack"); // to access built-in plugins
const loaders = require("./loaders");
const plugins = require("./plugins");

///

module.exports = {
  entry: {
    "site/app": [
      path.resolve(__dirname, "../src/site/app/app.js"),
      path.resolve(__dirname, "../src/site/app/app.scss"),
      path.resolve(__dirname, "../src/site/app/header.phtml"),
      path.resolve(__dirname, "../src/site/app/footer.phtml"),
      path.resolve(__dirname, "../src/site/app/navigation.phtml"),
    ],
    "site/home": [
      path.resolve(__dirname, "../src/site/home/home.js"),
      path.resolve(__dirname, "../src/site/home/home.scss"),
      path.resolve(__dirname, "../src/site/home/home.phtml"),
    ],

    "admin/login": [
      path.resolve(__dirname, "../src/admin/login/login.js"),
      path.resolve(__dirname, "../src/admin/login/login.scss"),
      path.resolve(__dirname, "../src/admin/login/login.phtml"),
    ],
    "admin/logout": [
      path.resolve(__dirname, "../src/admin/logout/logout.phtml"),
      path.resolve(__dirname, "../src/admin/logout/logout.js"),
      path.resolve(__dirname, "../src/admin/logout/logout.scss"),
    ],
  },

  ///
  module: {
    rules: [
      loaders.AdminPhtmlLoader,
      loaders.SitePhtmlLoader,
      loaders.ImageLoader,
      loaders.FontLoader,
      loaders.JSLoader,
      loaders.CSSLoader,
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../../project/public"),
  },
  plugins: [
    new webpack.ProgressPlugin(),
    plugins.CleanWebpackPlugin,
    //plugins.PurgecssPlugin,
    plugins.ESLintPlugin,
    plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin,
    plugins.CopyPlugin,
  ],
};
