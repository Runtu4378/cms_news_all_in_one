import les from './index.less'
import {
  Title,
  TaskList,
} from '@com'

const MonthLab = ({
  dispatch,
  loading,
  list,
}) => {
  // 属性定义
  const propsOfTaskList = {
    dispatch,
    loading,
    data: list,
  }

  return (
    <div className={les.container}>
      {/* 标题 */}
      <Title label={'月目标'} />
      {/* 内容 */}
      <div>
        <TaskList {...propsOfTaskList} />
      </div>
    </div>
  )
}

export default MonthLab
