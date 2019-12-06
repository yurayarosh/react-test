import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import './Header.sass'
import { IS_OPEN } from '../../helpers/constants'

export default () => {  
  let [isOpen, setOpen] = useState(false)
  
  function handleBurgerClick(e) {
    if (e.target.closest('.header__nav-in')) return
    setOpen(isOpen = !isOpen)
  }
  return (
    <header className="header">
      <div className="header__inner">
        <div className={isOpen ? `header__nav ${IS_OPEN}` : 'header__nav'} onClick={handleBurgerClick}>
          <div className="header__nav-in">
            <Nav />
          </div>
        </div>
        <div className="header__burger">
          <button
            className={isOpen ? `burger ${IS_OPEN}` : 'burger'}
            onClick={handleBurgerClick}
            ><span></span></button>
        </div>
      </div>
    </header>
  )
}
