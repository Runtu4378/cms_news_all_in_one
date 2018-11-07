import {
  Icon,
} from 'antd'
import les from './index.less'

const Mark = () => {
  return (
    <div className={les.mark}>
      <Icon type='book' className={les.icon} />
      <span className={les.txt}>日记</span>
    </div>
  )
}

export default Mark
