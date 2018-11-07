const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = ({
  SRC,
  STATIC_DIR,
  DLL_DIR,
  PUBLIC_PATH,
}) => {
  return [
    // 复制资源文件
    new CopyWebpackPlugin([
      {
        from: path.resolve(STATIC_DIR, './**'),
        to: './static/',
        context: STATIC_DIR,
        cache: true,
      },
    ]),
    // 首页
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(SRC, './indexPage.ejs'),
      xhtml: true,
      PUBLIC_PATH: PUBLIC_PATH,
    }),
    // 变量替换
    new webpack.DefinePlugin({
      'PUBLIC_PATH': JSON.stringify(PUBLIC_PATH),
    }),
    // 全局React变量提供
    new webpack.ProvidePlugin({
      'React': 'react',
    }),
  ]
}