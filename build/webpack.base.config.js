const webpack = require('webpack')
const env = require('./env')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const DashboardPlugin =  require('webpack-dashboard/plugin')
module.exports = {
  mode: env,
  entry: {
    bundle: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[chunkhash].js',
    // publicPath: 'dist/' // 知道如何寻找资源
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src'),
    }
  },
  module: {
    rules: [
      {
        // 图片格式正则
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            // 配置 url-loader 的可选项
            options: {
            // 限制 图片大小 10000B，小于限制会将图片转换为 base64格式
              limit: 10000,
            // 超出限制，创建的文件格式
            // build/images/[图片名].[hash].[图片格式]
              name: 'images/[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        // loader的解析顺序是从后往前的，所以mini要放前面
        use: [{
          loader: MiniCssExtractPlugin.loader
        }, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(sass|scss)/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        }, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        // babel
        test: /\.js$/, // js文件采用Babel
        use: ['babel-loader', 'eslint-loader'], // 使用loader
        exclude: /node_modules/ // 不包括的
      },
      {
        enforce: 'pre',
        test: /\.(js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash:8].css',
      chunkFilename: 'css/[id].css'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env)
    }),
    // new DashboardPlugin()
  ]
}