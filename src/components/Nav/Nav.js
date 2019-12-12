import React from 'react'
import { NavLink } from "react-router-dom";
import './Nav.sass'

export default props => {
  const { onLinkClick } = props
  
  const links = [
    { to: '/', title: 'To Do List', exact: true },
    { to: '/about', title: 'About', exact: false },
    { to: '/blog', title: 'Blog', exact: false },
    { to: '/questions-test', title: 'Questions Test', exact: false },
    { to: '/auth', title: 'Authorization', exact: false },
  ]
  return (
    <nav className="nav">
      <ul className="nav__list">
        {links.map((link, i) =>
          <li
            className="nav__item"
            key={i}><NavLink
            to={link.to}
            className="nav__link"
            activeClassName="nav__link--active"
            exact={link.exact}
            onClick={onLinkClick}
            >{link.title}</NavLink></li>
        )}
      </ul>
    </nav>
  )
}
