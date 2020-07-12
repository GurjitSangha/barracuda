import React from 'react'
import './TopBar.css'

export default function TopBar() {
  return (
    <section id='topbar' className="d-none d-lg-flex align-items-center fixed-top topbar-transparent">
      <div className='container text-right'>
        <i className='icofont-phone'></i> 0114 272 7154
        <i className="icofont-clock-time icofont-rotate-180"></i> Mon-Fri: 11:30 AM - 19:00 PM
      </div>
    </section>
  )
}