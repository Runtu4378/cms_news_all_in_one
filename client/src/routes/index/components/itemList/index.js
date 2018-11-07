import les from './index.less'
import {
  Button,
} from 'antd'

const ItemList = ({
  app,
}) => {
  // props collect
  const {
    itemList,
  } = app

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
      <div className={les.listLab}>
        {
          itemList && itemList.length ?
          mapList(itemList) :
          (<div>暂无内容</div>)
        }
      </div>
      <div className={les.btnLab}>
        <Button
          block={true}
        >新增条目</Button>
      </div>
    </div>
  )
}

export default ItemList
