import React from 'react'
import './Menu.css'
import data from '../menuData'

export default function Menu() {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="section-title">
          <h2>Our <span>Menu</span></h2>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              <li data-filter="*" className="filter-active">Show All</li>
              {
                data.filters.map((filter, i) => {
                  return (
                    <li 
                      data-filter={`.filter-${filter.safe}`} 
                      key={i}
                    >
                      {filter.display}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>

        <div className="row menu-container">
          {
            data.items.map((item, i) => {
              return (
                <div className={`col-lg-4 menu-item filter-${item.filter}`} key={i}>
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