const {
  resolve,
  module: { rules },
} = require('../../config/commonWebpackConfig')

module.exports = {
  stories: ['../../components/**/react.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-postcss',
    '../../packages/markup-generator-addon/preset',
  ],
  webpackFinal: (config) => ({
    ...config,
    module: {
      rules: rules.concat(
        config.module.rules.concat({
          test: /\.md$/,
          use: [
            {
              loader: 'markdown-loader',
            },
          ],
        }),
      ),
    },
    resolve,
  }),
}
