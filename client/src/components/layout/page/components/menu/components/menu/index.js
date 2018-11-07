import les from './index.less'

const Menu = () => {
  // 属性提取
  const menuList = [
    { path: '/', label: '主页' },
    { path: '/year', label: '年视图' },
    { path: '/month', label: '月视图' },
    { path: '/date', label: '日视图' },
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
