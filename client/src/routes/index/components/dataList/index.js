import les from './index.less'
import {
  Button,
} from 'antd'

const ItemList = ({
  app,
}) => {
  // props collect
  const {
    itemSelect,
  } = app
  const {
    dataList,
  } = itemSelect

  // func definition
  const mapList = (arr) => {
    return arr.map((d) => {
      return (
        <div key={d._id} className={les.itemCon}>
          <div className={les.itemName}>{d.name}</div>
          <div className={les.itemDesc}>{d.desc}</div>
        </div>
      )
    })
  }

  return (
    <div className={les.container}>
      <div className={les.title}>
        内容列表
      </div>
      <div className={les.listLab}>
        {
          dataList && dataList.length ?
          mapList(dataList) :
          (<div>暂无内容</div>)
        }
      </div>
      <div className={les.btnLab}>
        <Button
          block={true}
        >新增内容</Button>
      </div>
    </div>
  )
}

export default ItemList
