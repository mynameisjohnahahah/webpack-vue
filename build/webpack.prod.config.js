const merge = require('webpack-merge')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const OptimizationCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const env = require('./env')
const baseConfig = require('./webpack.base.config')
module.exports = merge(baseConfig, {
  devtool: 'source-map',
  module: {
    rules: []
  },
  stats: {
    modules: false,
    source: false
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0, // 生产块的最小大小
      maxSize: 0,
      name: true,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        sourceMap: env === 'development',
        terserOptions: {
          cache: true,
          compress: {
            drop_debugger: true,
            drop_console: true
          }
        }
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ProgressBarPlugin({
      callback: function (res) {
        console.log('打包完成:)')
      }
    }),
    // 压缩css
    new OptimizationCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env)
    }),
  ]
})