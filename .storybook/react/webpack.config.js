const path = require("path");

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.module.rules.push(
    {
      test: /stories\.react\.js$/,
      loaders: [require.resolve("@storybook/addon-storysource/loader")],
      include: [path.resolve(__dirname, "../../components")],
      enforce: "pre"
    },
    {
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader?modules", "sass-loader"],
      include: [path.resolve(__dirname, "./../../components")]
    }
  );

  defaultConfig.resolve.modules.push(path.resolve(__dirname, "../../"));

  defaultConfig.resolve.extensions = defaultConfig.resolve.extensions.concat([
    ".scss"
  ]);

  return defaultConfig;
};
