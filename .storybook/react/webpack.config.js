const path = require('path')

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.module.rules.push(
    {
      test: /stories\.react\.js$/,
      loaders: [require.resolve('@storybook/addon-storysource/loader')],
      include: [path.resolve(__dirname, '../../components')],
      enforce: 'pre',
    },
    {
      test: /\.scss$/,
      loaders: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },
        },
        'sass-loader',
      ],
      include: [
        path.resolve(__dirname, './../../components'),
        path.resolve(__dirname, './../../styles'),
      ],
    },
    {
      test: /\.svg$/,
      exclude: /node_modules/,
      loader: 'svg-inline-loader',
    },
  )

  defaultConfig.module.rules = defaultConfig.module.rules.map(rule => {
    const oldPattern = /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/
    const newPattern = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/

    return String(rule.test) === String(oldPattern) ? { ...rule, test: newPattern } : rule
  })

  defaultConfig.resolve.modules.push(path.resolve(__dirname, '../../'))

  defaultConfig.resolve.extensions = defaultConfig.resolve.extensions.concat(['.scss'])

  return defaultConfig
}
