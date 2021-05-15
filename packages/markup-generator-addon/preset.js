const path = require('path')

module.exports = {
  managerEntries: (entry = [], options) => [
    ...entry,
    require.resolve('./dist/register'),
  ],
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
    resolve: {
      alias: {
        lib: path.resolve(__dirname, '../lib'),
        components: path.resolve(__dirname, '../components'),
        images: path.resolve(__dirname, '../images'),
        config: path.resolve(__dirname, '../config'),
        styles: path.resolve(__dirname, '../styles'),
        vendor: path.resolve(__dirname, '../vendor'),
      },
      extensions: ['.ts', '.tsx', '.scss', '.css', '.svg', '.js', '.jsx'],
    },
  }),
}
