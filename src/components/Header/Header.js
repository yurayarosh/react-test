import classNames from 'classnames'
import { Link } from 'react-router-dom'

const Header = ({ className, ...attrs }) => {
  const cls = classNames('header', className)

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
    </header>
  )
}

export default Header
