const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ],
});