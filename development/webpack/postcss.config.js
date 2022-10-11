const autoprefixer = require("autoprefixer");
const postcssImport = require("postcss-import");
const cssNano = require("cssnano");
//const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    autoprefixer,
    postcssImport,
    // purgecss({
    //   content: ["../src/**/*.phtml"],
    // }),
    cssNano({
      preset: "default",
    }),
  ],
};
