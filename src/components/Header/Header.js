import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import './Header.sass'
import { IS_OPEN } from '../../helpers/constants'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  handleBurgerClick(e) {
    if (e.target.closest('.header__nav-in')) return
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <header className="header">
        <div className="header__inner">
          <div className={this.state.isOpen ? `header__nav ${IS_OPEN}` : 'header__nav'} onClick={this.handleBurgerClick.bind(this)}>
            <div className="header__nav-in">
              <Nav />
            </div>
          </div>
          <div className="header__burger">
            <button
              className={this.state.isOpen ? `burger ${IS_OPEN}` : 'burger'}
              onClick={this.handleBurgerClick.bind(this)}
              ><span></span></button>
          </div>
        </div>
      </header>
    )
  }
}
