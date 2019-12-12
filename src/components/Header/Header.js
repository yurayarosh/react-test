import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import './Header.sass'
import { IS_OPEN, IS_ACTIVE } from '../../helpers/constants'
// import { IS_OPEN } from '../../helpers/constants'

export default () => {
  const [isOpen, setOpen] = useState(false)

  function handleBurgerClick() {
    setOpen(!isOpen)
  }
  return (
    <header className="header">
      <div className="header__inner">
        <div className={isOpen ? `header__nav header__nav--${IS_OPEN}` : 'header__nav'}>
          <div className="header__nav-in">
            <Nav
              onLinkClick={handleBurgerClick}
            />
          </div>
          <div
            className="header__nav-overlay"
            onClick={handleBurgerClick}></div>
        </div>
        <div className="header__burger">
          <button
            className={isOpen ? `burger burger--${IS_ACTIVE}` : 'burger'}
            onClick={handleBurgerClick}
          ><span></span></button>
        </div>
      </div>
    </header>
  )
}
