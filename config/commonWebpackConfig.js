/*
 * This is for the module builds in /packages.
 */
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const rules = [
  {
    test: /\.(t|j)sx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },
  {
    test: /\.s[ac]ss$/,
    loaders: [
      'style-loader',
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
  {
    test: /\.svg$/,
    exclude: /node_modules/,
    loader: 'svg-inline-loader',
  },
  {
    test: /\.(png|jpg|gif|md)$/,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]',
      context: '',
    },
  },
]

const resolve = {
  alias: {
    lib: path.resolve(__dirname, '../lib'),
    components: path.resolve(__dirname, '../components'),
    images: path.resolve(__dirname, '../images'),
    config: path.resolve(__dirname, '../config'),
    styles: path.resolve(__dirname, '../styles'),
    vendor: path.resolve(__dirname, '../vendor'),
  },
  extensions: ['.ts', '.tsx', '.scss', '.css', '.svg', '.js', '.jsx'],
}

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  optimization: {
    minimize: false,
  },
  module,
  externals: ['react', 'react-dom'],
  resolve,
  plugins: [new CopyWebpackPlugin([{ from: './../../styles', to: 'styles', ignore: ['**/*.js'] }])],
}

module.exports.module = {
  rules,
}

module.exports.resolve = resolve
