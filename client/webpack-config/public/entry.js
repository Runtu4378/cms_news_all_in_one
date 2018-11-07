const path = require('path')

module.exports = ({
  SRC,
}) => {
  const entry = {
    index: path.resolve(SRC, './index.js')
  }
  return entry
}
