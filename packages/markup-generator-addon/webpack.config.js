const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/css.js',
  output: { filename: 'css.js', libraryTarget: 'commonjs' },
  resolve: {
    alias: {
      lib: path.resolve(__dirname, '../../lib'),
      components: path.resolve(__dirname, '../../components'),
      images: path.resolve(__dirname, '../../images'),
      config: path.resolve(__dirname, '../../config'),
      styles: path.resolve(__dirname, '../../styles'),
      vendor: path.resolve(__dirname, '../../vendor'),
    },
    extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.(t|j)sx?$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //       options: {
      //         presets: [
      //           '@babel/preset-env',
      //           '@babel/preset-typescript',
      //           ['@babel/preset-react', { runtime: 'automatic' }],
      //         ],
      //         plugins: ['@babel/plugin-proposal-class-properties'],
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM',
  // },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     React: path.resolve(path.join(__dirname, '../../node_modules/react')),
  //     ReactDOM: path.resolve(path.join(__dirname, '../../node_modules/react-dom')),
  //   }),
  // ],
}
