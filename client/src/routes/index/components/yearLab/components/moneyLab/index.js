import {
  Button,
} from 'antd'
import {
  getRemainMonth,
  getRemainWeek,
  getRemainDay,
} from '@utils/func'
import les from './index.less'
import ModalEdit from './modalEdit'
import moment from 'moment'

class MoneyLab extends React.Component {
  state = {
    editModalVisible: false,
  }

  editModalShow = () => {
    this.setState({ editModalVisible: true })
  }

  editModalHide = () => {
    this.setState({ editModalVisible: false })
  }

  render () {
    const {
      valueType, //income,outlay,net
      value,
      rateType, // year,month,week,day
      canEdit,
      handleChange,
    } = this.props
    const {
      editModalVisible,
    } = this.state

    // props definition
    const propsOfModalEdit = {
      handleHide: this.editModalHide,
      handleChange: updataValue,
      visible: editModalVisible,
      baseValue: rateValue,
    }
    const typeClass = les[valueType]
    const remainMonth = getRemainMonth()
    const remainWeek = getRemainWeek()
    const remainDay = getRemainDay()

    const mathValue = parseInt(value, 10)
    if (!mathValue) {
      throw new Error('invalid value')
    }
    let rateValue
    if (rateType === 'year') {
      rateValue = mathValue.toFixed(0)
    } else if (rateType === 'month') {
      rateValue = (mathValue / remainMonth).toFixed(0)
    } else if (rateType === 'week') {
      rateValue = (mathValue / remainWeek).toFixed(0)
    } else if (rateType === 'day') {
      rateValue = (mathValue / remainDay).toFixed(0)
    } else {
      throw new Error(`invalid value ${rateType}`)
    }

    // function definition
    const updataValue = ({ value }) => {
      if (rateType === 'year') {
        handleChange({ value })
      } else if (rateType === 'month') {
        handleChange({ value: value * 12 })
      } else if (rateType === 'week') {
        handleChange({ value: (value / 7 *365).toFixed(0) })
      } else if (rateType === 'day') {
        handleChange({ value: value * 365 })
      }
    }

    return (
      <div className={`${les.moneyLab} ${typeClass}`}>
        <span>{rateValue}</span>
        {
          canEdit &&
          <Button
            icon='edit'
            type='dashed'
            title='edit'
            size='small'
            className={les.edit}
            onClick={this.editModalShow}
          />
        }
        <ModalEdit {...propsOfModalEdit} />
      </div>
    )
  }
}

export default MoneyLab
