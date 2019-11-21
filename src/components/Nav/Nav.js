import React from 'react'
import {
  Link
} from "react-router-dom";
import './Nav.sass'

export default () =>
  <nav className="nav">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/blog">Blog</Link></li>
    </ul>
  </nav>
