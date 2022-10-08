# Base Webpack Setup

It is based upon the Medium article of Jon Torrado

[How to set up Webpack 5, ES6 with ESLint, PostCSS with Stylelint, CSSNANO and more!](https://jontorrado.medium.com/working-with-webpack-4-es6-postcss-with-preset-env-and-more-93b3d77db7b2)

So in this project we are gonna setup webpack with:

- **[Webpack 5](https://webpack.github.io/)**
- **[ES6](https://es.wikipedia.org/wiki/ECMAScript)** with **[Babel](https://babeljs.io/)**
- **[ESLint](https://eslint.org/)** for javascript linting
- **[PostCss](http://postcss.org/)** (with import and preset-env)
- **[StyleLint](https://stylelint.io/)** forr Css Linting
- **[Clean Webpack plugin](https://github.com/johnagan/clean-webpack-plugin)**
- **[Cssnano](https://cssnano.co/)**
- **[File Loader](https://cssnano.co/)**
- **[MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)**
- and some other tools

## Webpack

First of all, you should have npm already installed in order to globally install webpack (and the upcoming dependencies):

```
npm i -g webpack
```

Project Folder

```
mkdir project
```

Init npm

```
npm init -y
```

Let’s start by installing the needed dependencies:

```
npm add webpack webpack-cli webpack-merge --save-dev
```

That was easy, wasn’t it? Check the package.json file and keep it open, we will be coming back soon. Also check that the installed webpack version is 5.\*.

Now, we are going to create the `webpack.common.js` file. I usually create a folder for each piece of software (keep all your stuff ordered!). So create a webpack folder and put the config file there.

## ES6 with Babelcode 

```
npm add @babel/core @babel/preset-env babel-loader --save-dev
```

A lot of people usually creates a .babelrc file here to load the env preset, but I prefer to load it everything from the configuration files. Let’s start editing our `webpack/webpack.common.js` file (adapt it with your paths):

```js
const path = require("path");
const loaders = require("./loaders");
const webpack = require("webpack"); // to access built-in plugins
module.exports = {
  entry: ["../src/js/app.js"],
  module: {
    rules: [loaders.JSLoader],
  },
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new webpack.ProgressPlugin()],
};
```

As you can read above, I separated all the webpack loaders in a loaders.js file imported at the top. Also, with Webpack 5, you can now create a `webpack.dev.js` file and a `webpack.prod.js` file. Here you have my dev file:

```js
"use strict";

const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
});
```

And here you have my prod file:

```js
"use strict";

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
});
```

Now, let’s create that `webpack/loaders.js` file:

```js
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
module.exports = {
  JSLoader: JSLoader,
};
```

Here you can see the presets loaded in the options section. No need for an extra `.babelrc` file!

Final step: run webpack. Edit the package.json file and add the following scripts:

```js
{
  "devDependencies": {
    ...
  },
  "scripts": {
    "build": "webpack --config resources/webpack/webpack.prod.js ",
    "watch": "webpack --watch --config resources/webpack/webpack.dev.js",
  }
}
```

That’s all you need to start working with ES6. Remember to create a `src/js/app.js` file and start writing your code there (whatever you like!). Then just type npm run build in a terminal to build your code.

Extra: when running webpack with the production config , all your resulting code will be automatically minified, wow! Read the documentation [here.](https://github.com/webpack/docs/wiki/cli)

## ESLint

Ok, I know you are one of the best coders out there but some linting won’t damage anybody… let’s use ESLint to get our code checked. As always, install the needed dependencies:

```js
npm add eslint eslint-webpack-plugin --save-dev
```

ESLint, with the eslint-webpack-plugin, needs a new `webpack/plugins.js` file to keep everything organized. Create that file (and again, adapt the paths to your needs):

```js
const path = require("path");
const _ESLintPlugin = require("eslint-webpack-plugin");
const ESLintPlugin = new _ESLintPlugin({
  overrideConfigFile: path.resolve(__dirname, ".eslintrc"),
  context: path.resolve(__dirname, "../src/js"),
  files: "**/*.js",
});
module.exports = {
  ESLintPlugin: ESLintPlugin,
};
```

The .eslintrc file (place it in the webpack folder) will tell the linter which rules apply to our code. This is an example, but feel free to check what others are using (such as airbnb packages, [here](https://github.com/airbnb/javascript/tree/master/packages)):

```js
{
  "extends": "eslint:recommended",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules": {
    "no-console": "off",
    "strict": ["error", "global"],
    "curly": "warn"
  }
}
```

The last step here is to add the recently created plugin. Edit your `webpack/webpack.common.js` file and append it:

```js
//...
const plugins = require('./plugins');
//...
module.exports = {
  ...

  plugins: [
    new webpack.ProgressPlugin(),
    plugins.ESLintPlugin,
  ],
  ...
};
```

We are done. You can test it by adding var a; inside the app.js file and then run npm run build. The result should be something like this:

```js
/[…]/js/app.js
 1:5  error  'a' is defined but never used  no-unused-vars
✖ 1 problem (1 error, 0 warnings)
```

## PostCSS

So, the JavaScript basic part is done, let’s start with the CSS part. This is something tricky with Webpack because our entry point is a JavaScript file

```js
(src/js/app.js).
```

As always, the first step is to install the needed dependencies:

```js
npm add css-loader cssnano file-loader mini-css-extract-plugin postcss postcss-import postcss-loader postcss-preset-env --save-dev
```

You must read what the heck are those libraries listed there. Hey: YOU MUST. Now, let’s create a new loader inside `webpack/loaders.js`:

```js
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//...
const CSSLoader = {
  test: /\.css$/i,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: path.resolve(__dirname, "../dist/css/"),
      },
    },
    {
      loader: "css-loader",
      options: { importLoaders: 1 },
    },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          config: path.resolve(__dirname, "postcss.config.js"),
        },
      },
    },
  ],
};
//...
module.exports = {
  CSSLoader: CSSLoader,
  JSLoader: JSLoader,
  ESLintLoader: ESLintLoader,
};
```

Wait a second, what happened here? Read carefully that configuration and check two things: we need a adapt the webpack/plugins.js file and a new webpack/postcss.config.jsconfiguration file. The first one will contain that MiniCssExtractPlugin tricky stuff for the CSS extraction. This is what your `webpack/plugins.js` should contain:

```js
const path = require("path");
const _MiniCssExtractPlugin = require("mini-css-extract-plugin");
const _ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: "[name].bundle.css",
  chunkFilename: "[id].css",
});
//...
module.exports = {
  MiniCssExtractPlugin: MiniCssExtractPlugin,
  ESLintPlugin: ESLintPlugin,
};
```

That was easy. Now, create a `webpack/postcss.config.js` file:

```js
module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      browsers: "last 2 versions",
      stage: 0,
    },
    cssnano: {},
  },
};
```

This will allow us lots of things in CSS, but it’s up to you to read all of them. Examples: nesting, using the var keyword, importing files, etc. Want to check it out? Edit your `webpack/webpack.common.js` file:

```js
const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');
module.exports = {
  ...
  module: {
    rules: [
      loaders.CSSLoader,
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    plugins.ESLintPlugin,
    plugins.MiniCssExtractPlugin,
  ],
};
```

It’s time to create a bit of CSS. First of all, create a file `src/css/app.css`:

```css
@import "settings/colors.css";
@import "components/dummy.css";
```

Then create the src/css/settings/colors.cssfile:

```css
:root {
  --color-black: rgb(0, 0, 0);
}
```

And also the src/css/components/dummy.cssfile:

```css
.dummy {
  color: var(--color-black);
}
```

But… where should we put our enty app.css file? Here comes the last tricky part. Edit your `src/js/app.js` file and add the following line:

```js
import "../css/app.css";
```

Now, just run npm run build and you should have a brilliant app.bundle.css file in your dist folder, awesome!

## StyleLint

Last (but not least) main block, let’s lint our CSS code. We are going to use Stylelint which is more or less the same as ESLint but for CSS. First of all, the dependencies:

```js
npm add stylelint stylelint-webpack-plugin --save-dev
```

Now, edit the webpack/plugins.js file as follows:

```js
const path = require("path");
const _MiniCssExtractPlugin = require("mini-css-extract-plugin");
const _StyleLintPlugin = require("stylelint-webpack-plugin");
const _ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: "[name].bundle.css",
  chunkFilename: "[id].css",
});
const ESLintPlugin = new _ESLintPlugin({
  overrideConfigFile: path.resolve(__dirname, ".eslintrc"),
  context: path.resolve(__dirname, "../src/js"),
  files: "**/*.js",
});
const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, "stylelint.config.js"),
  context: path.resolve(__dirname, "../src/css"),
  files: "**/*.css",
});
module.exports = {
  MiniCssExtractPlugin: MiniCssExtractPlugin,
  StyleLintPlugin: StyleLintPlugin,
  ESLintPlugin: ESLintPlugin,
};
```

And, of course, add the plugin in the `webpack/webpack.common.js` file:

```js
module.exports = {
  ...
  plugins: [
    new webpack.ProgressPlugin(),
    plugins.ESLintPlugin,
    plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin,
  ],
};
```

One last thing is missing: if you read the plugin configuration, we must create a `webpack/stylelint.config.js` file. Here you have one example configuration:

```js
module.exports = {
  rules: {
    "at-rule-no-unknown": true,
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "comment-no-empty": true,
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates-with-different-values"],
      },
    ],
    "declaration-block-no-shorthand-property-overrides": true,
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "keyframe-declaration-no-important": true,
    "media-feature-name-no-unknown": true,
    "no-descending-specificity": true,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "property-no-unknown": true,
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": true,
    "string-no-newline": true,
    "unit-no-unknown": true,
  },
};
```

Do you want to check it out? Edit your `src/css/components/dummy.css` file with something like this:

```css
.dummy {
  color: var(--color-black);
  font-size: 12jon;
}
```

Now, when you run npm run build, you should read something like this:

```js
ERROR in
src/css/components/dummy.css
 3:14 ✖ Unexpected unknown unit “jon” unit-no-unknown
```

Everything is working as expected. So, now what?

## Extra: FileLoader and Clean Webpack Plugin

Two amazing tools super easy to use and very powerful. First, let’s install FileLoader:

```js
npm add file-loader --save-dev
```

Now, let’s edit the `webpack/loaders.js` file:

```js
//...
const FileLoader = {
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: "file-loader",
      options: {
        outputPath: "images",
        publicPath: path.resolve(__dirname, "dist/"),
      },
    },
  ],
};
module.exports = {
  CSSLoader: CSSLoader,
  JSLoader: JSLoader,
  FileLoader: FileLoader,
};
```

And, of course, add the new loader to the `webpack.common.js` configuration file:

```js
//...
module: {
  rules: [
    loaders.CSSLoader,
    loaders.JSLoader,
    loaders.FileLoader,
  ]
},
//...
```

That’s all you need to do. Read the **[documentation](https://webpack.js.org/loaders/file-loader/)** for further instructions.

Another super useful tool is the **[Clean Plugin for Webpack.](https://github.com/johnagan/clean-webpack-plugin)** This tool will automatically clean your build directory. Let’s install it:

```js
npm add clean-webpack-plugin --save-dev
```

And now, we just have to add it as a plugin, and it will automatically read our common configuration for its values. Edit the `webpack/plugins.js` file:

```js
//...
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//...

module.exports = {
  CleanWebpackPlugin: new CleanWebpackPlugin(),
  MiniCssExtractPlugin: MiniCssExtractPlugin,
  StyleLintPlugin: StyleLintPlugin,
  ESLintPlugin: ESLintPlugin,
};
```

And now just add it in the webpack.common.js file:

```js
plugins: [
  new webpack.ProgressPlugin(),
  plugins.CleanWebpackPlugin,
  plugins.ESLintPlugin,
  plugins.StyleLintPlugin,
  plugins.MiniCssExtractPlugin,
],
```

It seems that we’ve created an awesome boilerplate, haven’t we?

## So… anything else?

Here you have some usefull topics to read about after configuring your Webpack as above (same as in the older story).

- ITCSS: structuring your CSS files [(link)](https://itcss.io/)
- Redux: state container in JS [(link)](https://redux.js.org/)
- InfernoJS: react-like library extremely fast [(link)](https://github.com/infernojs/inferno)
- Service workers: read the doc [(link)](https://developers.google.com/web/fundamentals/primers/service-workers/)
- DDD: Domain Driven Design [(link)](https://en.wikipedia.org/wiki/Domain-driven_design)
- Deno [(link)](https://deno.land/)

Well, 6 topics for your homework… sorry about that.

**I hope you enjoyed this story, see you soon!**
