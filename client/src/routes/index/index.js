import { connect } from 'dva'
import les from './index.less'
import ItemList from './components/itemList'
import DataList from './components/dataList'

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
  const propsOfDataList = {
    dispatch,
    app,
  }

  return (
    <div className={les.contaienr}>
      <ItemList {...propsOfItemList} />
      <DataList {...propsOfDataList} />
    </div>
  );
}

export default connect(({ loading, app }) => ({ loading, app }))(PageIndex)
