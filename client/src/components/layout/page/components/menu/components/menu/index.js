import les from './index.less'

const Menu = () => {
  // 属性提取
  const menuList = [
    { path: '/', label: '条目列表' },
  ]

  // 渲染方法定义
  const mapMenu = (ary) => {
    return ary.map(d => {
      const { path, label } = d
      return (
        <li
          key={path}
          className={les.menuItem}
        >{label}</li>
      )
    })
  }

  return (
    <div className={les.container}>
      <ul className={les.menu}>{mapMenu(menuList)}</ul>
    </div>
  )
}

export default Menu
