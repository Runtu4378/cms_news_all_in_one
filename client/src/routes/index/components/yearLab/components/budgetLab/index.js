import {
  Button,
} from 'antd'
import les from './index.less'

const BudgetLab = ({
  dispatch,
  index,
}) => {
  // props collect
  // func definition
  const handleShowBudget = () => {
    dispatch({
      type: 'index/showModalBudget',
      show: true,
    })
  }

  return (
    <div className={les.container}>
      <div className={les.detailLab}></div>
      <div className={les.btnLab}>
        <Button
          // shape='circle'
          icon='profile'
          title='预算编辑'
          onClick={handleShowBudget}
        />
      </div>
    </div>
  )
}

export default BudgetLab
