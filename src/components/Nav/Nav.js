import React from 'react'
import { NavLink } from "react-router-dom";
import styles from './Nav.module.sass'

export default props => {
  const { onLinkClick } = props
  
  const links = [
    { to: '/', title: 'To Do List', exact: true },
    { to: '/about', title: 'About', exact: false },
    { to: '/blog', title: 'Blog', exact: false },
    { to: '/questions-test', title: 'Questions Test', exact: false }
  ]
  return (
    <nav className={styles.nav}>
      <ul>
        {links.map((link, i) =>
          <li key={i}><NavLink
            to={link.to}
            activeClassName={styles['is-active']}
            exact={link.exact}
            onClick={onLinkClick}
            >{link.title}</NavLink></li>
        )}
      </ul>
    </nav>
  )
}
