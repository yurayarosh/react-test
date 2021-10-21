import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { menuSlice } from '../../store/slices/menuSlice'
import Menu from '../Menu/Menu'

const Header = ({ className, ...attrs }) => {
  const cls = classNames('header', className)

  const dispatch = useDispatch()
  const hasOpenMenu = useSelector(state => state.menu.isOpen)

  const onBurgerClick = () => {
    dispatch(menuSlice.actions.toggle())

    console.log(hasOpenMenu)
  }

  return (
    <header className={cls} {...attrs}>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link" to="/about">
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/posts">
              Posts
            </Link>
          </li>
        </ul>
      </nav>

      <button type="button" onClick={onBurgerClick}>
        open menu
      </button>

      {
        hasOpenMenu ? <Menu /> : ''
      }
    </header>
  )
}

export default Header
