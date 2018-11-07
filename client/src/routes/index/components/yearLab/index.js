import les from './index.less'
import {
  Title,
  TaskList,
} from '@com'
import BudgetLab from './components/budgetLab'
import ModalBudget from './components/modalBudget'

const MonthLab = ({
  dispatch,
  loading,
  index,
  list,
}) => {
  // 获取属性
  const {
    modalBudgetVisible,
    modalBudgetValue,
  } = index
  // 属性定义
  const propsOfBudgetLab = {
    dispatch,
    index,
  }
  const propsOfTaskList = {
    dispatch,
    loading,
    data: list,
  }
  const propsOfModalBudget = {
    dispatch,
    visible: modalBudgetVisible,
    value: modalBudgetValue,
  }

  return (
    <div className={les.container}>
      {/* 标题 */}
      <Title label={'年目标'} />
      {/* 内容 */}
      <div>
        <BudgetLab {...propsOfBudgetLab} />
        <TaskList {...propsOfTaskList} />
        <ModalBudget {...propsOfModalBudget} />
      </div>
    </div>
  )
}

export default MonthLab
