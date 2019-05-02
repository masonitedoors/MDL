const path = require('path')

module.exports = ({ config, mode }) => {
  config.module.rules.push(
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

  config.resolve.modules.push(path.resolve(__dirname, '../../'))

  config.resolve.extensions = config.resolve.extensions.concat(['.scss'])

  return config
}
