import les from './index.less'
import Mark from './components/mark'
import Menu from './components/menu'

const Menus = ({
  dispatch,
  app,
}) => {
  const propsOfUserInfo = {
    dispatch,
    app,
  }
  return (
    <div className={les.menuCon}>
      {/* 标题 */}
      <Mark />
      {/* 菜单 */}
      <Menu />
    </div>
  )
}

export default Menus
