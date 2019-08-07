const merge = require('webpack-merge')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const path = require('path')
const baseConfig = require('./webpack.base.config')
module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: []
  },
  stats: {
    modules: false,
    source: false
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ProgressBarPlugin({
      callback: function (res) {
        console.log('打包完成')
      }
    })
  ]
})