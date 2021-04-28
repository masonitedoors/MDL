const path = require('path')
const { resolve } = require('../../config/webpack.config.js')

module.exports = {
  managerEntries: (entry = [], options) => [...entry, require.resolve('./dist/register')],
  managerWebpack: (config) => ({
    ...config,
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|md)$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            context: '',
            publicPath: './',
          },
        },
        {
          test: /(tailwind|prism-.+)\.css$/,
          loaders: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          loaders: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [path.resolve(__dirname, './../')],
              },
            },
          ],
        },
      ],
    },
    resolve,
  }),
}
