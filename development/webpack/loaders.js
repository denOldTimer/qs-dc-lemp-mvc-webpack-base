const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// JS
const JSLoader = {
  test: /\.js$/i,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
    },
  },
};

// CSS Development
const CSSLoaderDev = {
  test: /\.(s[ac]|c)ss$/i,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      // options: {
      //   publicPath: path.resolve(__dirname, '../dist/css/')
      // }
    },
    {
      loader: "css-loader",
      options: { importLoaders: 2 },
    },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          config: path.resolve(__dirname, "postcss.config.js"),
        },
      },
    },
    {
      loader: "sass-loader",
    },
  ],
};

const SitePhtmlLoader = {
  test: /\.[p]html$/,
  exclude: [
    path.resolve(__dirname, "./node_modules"),
    path.resolve(__dirname, "../src/admin/"),
  ],
  type: "asset/resource",
  generator: {
    filename: "../../project/App/Views/Site/[name].phtml",
  },
};

const AdminPhtmlLoader = {
  test: /\.[p]html$/,
  exclude: [
    path.resolve(__dirname, "./node_modules"),
    path.resolve(__dirname, "../src/site/"),
  ],
  type: "asset/resource",
  generator: {
    filename: "../../project/App/Views/Admin/[name].phtml",
  },
};

// Images
const ImageLoader = {
  test: /\.(png|jpeg|jpg|gif|svg)$/,
  exclude: [path.resolve(__dirname, "./node_modules"), [/fonts/]],
  use: [
    {
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
        outputPath: "images/",
      },
    },
  ],
};

// Fonts
const FontLoader = {
  test: /\.(svg|eot|ttf|woff|woff2)$/,
  exclude: [path.resolve(__dirname, "./node_modules"), [/img/]],
  use: [
    {
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
        outputPath: "fonts/",
      },
    },
  ],
};

// Font-awesome;
const FontAwesomeLoader = {
  test: /font-awesome\.config\.js/,
  use: [{ loader: "style-loader" }, { loader: "font-awesome-loader" }],
};

module.exports = {
  JSLoader: JSLoader,
  CSSLoader: CSSLoaderDev,
  SitePhtmlLoader: SitePhtmlLoader,
  AdminPhtmlLoader: AdminPhtmlLoader,
  ImageLoader: ImageLoader,
  FontLoader: FontLoader,
  FontAwesomeLoader: FontAwesomeLoader,
};
