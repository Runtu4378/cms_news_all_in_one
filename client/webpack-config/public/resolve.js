const path = require('path')

module.exports = ({
  SRC,
}) => {
  return {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': SRC,
      '@com': path.resolve(SRC, './components/com'),
      '@layout': path.resolve(SRC, './components/layout'),
      '@services': path.resolve(SRC, 'services'),
      '@static': path.resolve(SRC, 'static'),
      '@utils': path.resolve(SRC, 'utils'),
      '@net': path.resolve(SRC, 'utils/net'),
    },
  }
}
