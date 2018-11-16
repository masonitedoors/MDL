const {
  webpackConfig,
  reactRule,
  svgRule
} = require("./../../config/webpack.config");
const path = require("path");

webpackConfig.output.path = path.resolve(__dirname, "dist");
webpackConfig.module.rules.push(
  reactRule(path.resolve(__dirname, "./../../components"))
);
// webpackConfig.module.rules.push(
//   svgRule(path.resolve(__dirname, "./../../lib"))
// );

module.exports = webpackConfig;
