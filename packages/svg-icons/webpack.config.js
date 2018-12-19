const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
              plugins: ["@babel/plugin-proposal-class-properties"]
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: "svg-inline-loader"
      }
    ]
  },
  externals: ["react", "react-dom"],
  resolve: {
    alias: {
      lib: path.resolve(__dirname, "../lib"),
      components: path.resolve(__dirname, "../components"),
      config: path.resolve(__dirname, "../config"),
      styles: path.resolve(__dirname, "../styles")
    }
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "./../../vendor/micons/svg/SVG", to: "svg", ignore: "**/*.js" }
    ])
  ]
};
