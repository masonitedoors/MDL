const path = require("path");

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /stories\.html\.js$/,
    loaders: [require.resolve("@storybook/addon-storysource/loader")],
    include: [path.resolve(__dirname, "../../components")],
    enforce: "pre"
  });

  defaultConfig.resolve.extensions.push(".html");

  return defaultConfig;
};
