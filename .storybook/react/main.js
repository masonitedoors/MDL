const path = require('path')

const {
  resolve,
  module: { rules },
} = require('../../config/webpack.config.js')

module.exports = {
  webpackFinal: (config) => ({
    ...config,
    module: {
      ...config.module,
      rules: rules.concat({
        test: /\.md$/,
        use: [
          {
            loader: 'markdown-loader',
          },
        ],
      }),
    },
    resolve,
  }),
}
