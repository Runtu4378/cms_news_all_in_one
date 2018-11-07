module.exports = (conf) => {
  const {
    HOST,
    PORT,
  } = conf

  return {
    contentBase: './dist',
    publicPath: '/',
    // 设置localhost端口
    host: HOST,
    port: PORT,
    disableHostCheck: true,
    // 自动打开浏览器
    // open: true,
    hot: true,
    quiet: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        secure: false
      },
    },
  }
}