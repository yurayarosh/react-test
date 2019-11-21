import React from 'react'
import Nav from '../Nav/Nav'
import './Header.sass'

export default () =>
  <header className="header">
    <div className="header__inner">
      <div className="header__nav">
        <Nav />
      </div>
    </div>
  </header>
