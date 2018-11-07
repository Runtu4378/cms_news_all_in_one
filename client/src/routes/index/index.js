import { connect } from 'dva'
import les from './index.less'
import ItemList from './components/itemList'

const PageIndex = ({
  dispatch,
  loading,
  app,
}) => {
  // 属性定义
  const propsOfItemList = {
    dispatch,
    app,
  }

  return (
    <div className={les.contaienr}>
      <ItemList {...propsOfItemList} />
    </div>
  );
}

export default connect(({ loading, app }) => ({ loading, app }))(PageIndex)
