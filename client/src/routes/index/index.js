import { connect } from 'dva'
import les from './index.less'

const PageIndex = ({
  dispatch,
  loading,
  index,
}) => {
  // 属性定义

  return (
    <div className={les.contaienr}>
    </div>
  );
}

export default connect(({ loading, index }) => ({ loading, index }))(PageIndex)
