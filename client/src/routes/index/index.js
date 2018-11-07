import { connect } from 'dva'
import les from './index.less'
import ItemList from './components/itemList'

const PageIndex = ({
  dispatch,
  loading,
  index,
}) => {
  // 属性定义

  return (
    <div className={les.contaienr}>
      <ItemList />
    </div>
  );
}

export default connect(({ loading, index }) => ({ loading, index }))(PageIndex)
