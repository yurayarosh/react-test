import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import classes from './Header.module.sass'
// import { IS_OPEN } from '../../helpers/constants'

export default () => {
  let [isOpen, setOpen] = useState(false)

  function handleBurgerClick() {
    setOpen(isOpen = !isOpen)
  }
  return (
    <header className={classes['header']}>
      <div className={classes['header__inner']}>
        <div className={isOpen ? `${classes['header__nav']} ${classes['is-open']}` : classes['header__nav']}>
          <div className={classes['header__nav-in']}>
            <Nav
              onLinkClick={handleBurgerClick}
            />
          </div>
          <div
            className={classes['header__nav-overlay']}
            onClick={handleBurgerClick}></div>
        </div>
        <div className={classes['header__burger']}>
          <button
            className={isOpen ? `${classes.burger} ${classes['is-open']}` : classes.burger}
            onClick={handleBurgerClick}
          ><span></span></button>
        </div>
      </div>
    </header>
  )
}
