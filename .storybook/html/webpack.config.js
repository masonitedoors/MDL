const path = require('path')

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.module.rules.push(
    {
      test: /stories\.html\.js$/,
      loaders: [require.resolve('@storybook/addon-storysource/loader')],
      include: [path.resolve(__dirname, '../../components')],
      enforce: 'pre',
    },
    {
      test: /\.s?css$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
      include: [
        path.resolve(__dirname, './../../components'),
        path.resolve(__dirname, './../../styles'),
      ],
    },
  )

  defaultConfig.resolve.modules.push(path.resolve(__dirname, '../../'))

  defaultConfig.resolve.extensions = defaultConfig.resolve.extensions.concat(['.scss'])

  return defaultConfig
}
