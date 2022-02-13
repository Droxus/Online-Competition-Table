const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,

  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    
    new CopyPlugin({
      patterns: [
        { from: "img", to: "img" },
        { from: "style.css", to: "." },
      ],
    }),
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "index.html",
    }),
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/i,
  //       use: ['style-loader', 'css-loader'],
  //     },
  //   ],
  // },
};
