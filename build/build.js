const webpack = require('webpack')
const config = require('./webpack.prod.config')

webpack(config, (err, stats) => {
  // 处理错误
  if (err || stats.hasErrors()) {
    console.log('-------------报错了-------------')
    console.error(err)
    return
  }
  // 处理完成
  console.log(stats.toString({
    chunks: false,
    colors: true    // 在控制台展示颜色
  }))
})