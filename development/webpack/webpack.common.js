const path = require("path");
const webpack = require("webpack"); // to access built-in plugins
const loaders = require("./loaders");
const plugins = require("./plugins");

///

module.exports = {
  entry: {
    "site/navigation": [
      path.resolve(__dirname, "../src/site/js/navigation.js"),
      path.resolve(__dirname, "../src/site/views/navigation.phtml"),
      path.resolve(__dirname, "../src/site/views/header.phtml"),
      path.resolve(__dirname, "../src/site/views/footer.phtml"),
    ],
    "site/theme": [
      path.resolve(__dirname, "../src/site/js/theme.js"),
      path.resolve(__dirname, "../src/site/scss/theme.scss"),
      path.resolve(__dirname, "../src/site/views/theme.phtml"),
    ],
    "site/home": [
      path.resolve(__dirname, "../src/site/js/home.js"),
      path.resolve(__dirname, "../src/site/scss/home.scss"),
      path.resolve(__dirname, "../src/site/views/home.phtml"),
    ],

    "admin/navigation": [
      path.resolve(__dirname, "../src/admin/js/navigation.js"),
      path.resolve(__dirname, "../src/admin/views/navigation.phtml"),
      path.resolve(__dirname, "../src/admin/views/header.phtml"),
      path.resolve(__dirname, "../src/admin/views/footer.phtml"),
    ],
    "admin/login": [
      path.resolve(__dirname, "../src/admin/js/login.js"),
      path.resolve(__dirname, "../src/admin/scss/login.scss"),
      path.resolve(__dirname, "../src/admin/views/login.phtml"),
    ],
    "admin/logout": [
      path.resolve(__dirname, "../src/admin/js/logout.js"),
      path.resolve(__dirname, "../src/admin/scss/logout.scss"),
      path.resolve(__dirname, "../src/admin/views/logout.phtml"),
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
    filename: "js/[name].js",
    path: path.resolve(__dirname, "../../project/public/"),
  },
  plugins: [
    new webpack.ProgressPlugin(),
    plugins.CleanWebpackPlugin,
    plugins.PurgecssPlugin,
    plugins.ESLintPlugin,
    //plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin,
    plugins.CopyPlugin,
    plugins.BrowserSyncPlugin,
  ],
};
