import classNames from 'classnames'
import Header from '../Header/Header'
// import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
// import { openMenu, closeMenu } from '../../store/actions'


const Layout = ({ children }) => {
  const hasMenuOpen = useSelector(state => state.menu.isOpen)

  console.log({ hasMenuOpen })

  return (
    <div className={classNames({ layout: true, 'has-menu-open': hasMenuOpen })}>
      <Header className="layout__header" />
      <main className="layout__main">{children}</main>
      <footer className="layout__footer">footer</footer>
    </div>
  )
}

export default Layout

// export default connect(({ menu }) => ({
//   menu,
// }), { openMenu, closeMenu })(Layout)
