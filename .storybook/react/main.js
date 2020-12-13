const {
  resolve,
  module: { rules },
} = require('../../config/webpack.config.js')

module.exports = {
  stories: ['../../components/**/react.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-knobs'],
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
    resolve
  }),
}
