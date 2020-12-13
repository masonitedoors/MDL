const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')

module.exports = {
  mode: 'production',
  entry: {
    tailwind: './src/tailwind.css',
    'tailwind.min': './src/tailwind.min.css',
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  externals: { fs: 'fs' },
  module: {
    rules: [
      {
        test: /tailwind\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /tailwind\.min\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'cssnano',
                    {
                      preset: 'default',
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new FixStyleOnlyEntriesPlugin(), new MiniCssExtractPlugin()],
}
