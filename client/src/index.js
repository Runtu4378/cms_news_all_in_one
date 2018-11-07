import './polyfill'
import dva from 'dva'
import { message } from 'antd'

// import createHistory from 'history/createHashHistory'
// user BrowserHistory
import createHistory from 'history/createBrowserHistory'
import createLoading from 'dva-loading'
import 'moment/locale/zh-cn'
// import './rollbar'

// 全局变量注入
// window.qDB = qDB

const basePath = PUBLIC_PATH
// import './index.less'
// 1. Initialize
const app = dva({
  history: createHistory({
    basename: basePath,
  }),
  onError: (err, dispatch) => {
    message.error(err.message, /* duration */3);
  },
})

// 2. Plugins
app.use(createLoading())

// 3. Register global model
app.model(require('./models/app').default)

// 4. Router
app.router(require('./router').default())

// 5. Start
app.start('#root')

// export default app // eslint-disable-line
