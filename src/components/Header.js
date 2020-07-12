import React from 'react'
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
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}