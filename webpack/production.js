const { merge } = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    publicPath: '/scaffold-typescript/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Scaffold Typescript',
      base: '/scaffold-typescript/',
    }),
  ],
});
