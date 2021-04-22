const {
  module: { rules, ...restModule },
  ...rest
} = require('./commonWebpackConfig')

module.exports = {
  ...rest,
  module: {
    ...restModule,
    rules: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      ...rules,
    ]
  },
}
