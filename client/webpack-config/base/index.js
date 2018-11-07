const path = require('path')

const { publicPath } = process.env

const ROOT = path.resolve(__dirname, '../../')
const SRC = path.resolve(ROOT, './src')

const PUBLIC_PATH = publicPath || '/'

console.log(`PUBLIC_PATH: ${PUBLIC_PATH}\n`)

module.exports = {
  ROOT, // 源码根目录
  SRC,
  OUTPUT_DIR: path.resolve(ROOT, 'dist'), // 打包产物目录
  STATIC_DIR: path.resolve(SRC, 'static'), // 静态资源目录
  DLL_DIR: path.resolve(SRC, 'static/dll'), //dll文件目录

  PUBLIC_PATH: PUBLIC_PATH, // 公用前缀

  HOST: '0.0.0.0',
  PORT: 9000,

  notifyOnErrors: true, // 显示错误信息
}