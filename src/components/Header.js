import React from 'react'
import { Link } from 'react-scroll'
import './Header.css'

export default function Header() {
  return (
    <header id="header" className="fixed-top d-flex align-items-center header-transparent">
      <div className="container d-flex align-items-center">

        <div className="logo mr-auto">
          <h1 className="text-light"><a href="index.html"><span>Barracuda Fish Bar</span></a></h1>
        </div>

        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active"><a href="index.html">Home</a></li>
            <li><Link to='menu' smooth={true} duration={500}>Menu</Link></li>
            <li><Link to='specials' smooth={true} duration={500}>Specials</Link></li>
            <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}