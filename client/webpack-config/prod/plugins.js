const basePlus = require('../public/plugins')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const Visualizer = require('webpack-visualizer-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')

module.exports = (conf) => {
  const basePlugins = basePlus(conf)
  const {
    STATIC_DIR,
    DLL_DIR,
  } = conf

  return [
    ...basePlugins,
    // 配置 dll
    new webpack.DllReferencePlugin({
      context: STATIC_DIR,
      manifest: path.resolve(DLL_DIR, './manifest.json'),
      name: 'dll',
    }),
    // 引入dll文件
    new HtmlWebpackIncludeAssetsPlugin({
      assets: ['static/dll/dll.js'],
      append: false
    }),
    // 进度条插件
    new ProgressBarPlugin(),
    // 包体积分析
    new Visualizer(),
  ]
}