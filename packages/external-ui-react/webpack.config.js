const path = require('path')

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
      'ts-loader',
    ],
  },
  {
    test: /\.scss$/,
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
    lib: path.resolve(__dirname, 'src/lib'),
    components: path.resolve(__dirname, 'src/components'),
    images: path.resolve(__dirname, 'src/images'),
    config: path.resolve(__dirname, 'src/config'),
    styles: path.resolve(__dirname, '../../styles'),
    vendor: path.resolve(__dirname, 'src/vendor'),
  },
  extensions: ['.ts', '.tsx', '.scss', '.css', '.svg', '.js', '.jsx'],
}

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'dist/index.js',
    path: path.resolve(__dirname),
    libraryTarget: 'commonjs2',
  },
  module,
  externals: ['react', 'react-dom', '@masonite/svg-icons'],
  resolve,
}

module.exports.module = {
  rules,
}

module.exports.resolve = resolve
