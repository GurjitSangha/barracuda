import React from 'react'
import { Link } from 'react-scroll'
import './Header.css'

export default function Header() {
  return (
    <header id="header" className="fixed-top d-flex align-items-center header-transparent">
      <div className="container d-flex align-items-center">

        <div className="logo mr-auto"></div>

        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li><Link to='top' smooth={true} duration={500}>Home</Link></li>
            <li><Link to='menu' offset={-30} smooth={true} duration={500}>Menu</Link></li>
            <li><Link to='specials' offset={-30} smooth={true} duration={500}>Specials</Link></li>
            <li><Link to='contact' offset={-30} smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}