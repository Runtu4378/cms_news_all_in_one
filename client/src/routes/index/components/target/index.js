import les from './index.less'
import WeekLab from '../weekLab'
import DayLab from '../dayLab'
import MonthLab from '../monthLab'
import YearLab from '../yearLab'

const Target = ({
  dispatch,
  loading,
  index,
}) => {
  // 属性提取
  const {
    dayList,
    weekList,
    monthList,
    yearList,
  } = index

  // 属性定义
  const propsOfWeekLab = {
    dispatch,
    loading,
    list: weekList,
  }
  const propsOfDayLab = {
    dispatch,
    loading,
    list: dayList,
  }
  const propsOfMonthLab = {
    dispatch,
    loading,
    list: monthList,
  }
  const propsOfYearLab = {
    dispatch,
    loading,
    list: yearList,
    index,
  }

  return (
    <div className={les.container}>
      <div className={les.floatCon}>
        <WeekLab {...propsOfWeekLab} />
        <DayLab {...propsOfDayLab} />
        <MonthLab {...propsOfMonthLab} />
        <YearLab {...propsOfYearLab} />
      </div>
    </div>
  )
}

export default Target
