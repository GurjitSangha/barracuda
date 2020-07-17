import React from 'react'
import './Menu.css'
import { specials } from '../menuData'

export default function Specials() {
  return (
    <section id="specials" className="menu">
      <div className="container">
        <div className="section-title">
          <h2>Our <span>Specials</span></h2>
        </div>

        <div className="row menu-container">
          {
            specials.map((item, i) => {
              return (
                <div className={`col-lg-4 menu-item`} key={i}>
                  <div className="menu-content">
                    <p>{item.name}</p><span>£{item.price}</span>
                  </div>
                  {
                    item.description && <div className="menu-description">{item.description}</div>
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}