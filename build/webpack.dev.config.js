const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.base.config')
const webpack = require('webpack')
const env = require('./env')
module.exports = merge(baseConfig, {
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    host: 'localhost',
    port: 9999,
    hot: true,
    compress: true,
    noInfo: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  devtool: env === 'development' ? 'source-map' : 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env)
    }),
  ]
})