import { connect } from 'dva'
import {
  Page,
} from '@layout'

const Main = ({
  dispatch,
  location,
  app,
  children,
}) => {
  // 属性定义
  const propsOfPage = {
    dispatch,
    location,
    app,
  }

  return (
    <Page {...propsOfPage}>{children}</Page>
  )
}

export default connect(({ app }) => ({ app }))(Main)
