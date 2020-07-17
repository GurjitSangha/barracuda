import React from 'react'
import { Link } from 'react-scroll'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-container">
        <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

          <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

          <div className="carousel-inner" role="listbox">

            <div className="carousel-item active" style={{ backgroundImage: `url('img/slide/coast.jpg')` }}>
              <div className="carousel-container">
                <div className="carousel-content">
                  <h2 className="animate__animated animate__fadeInDown"><span>Barracuda</span> Fish Bar</h2>
                  <div>
                    <Link to="menu" smooth={true} duration={500} className="btn-menu animate__animated animate__fadeInUp">Our Menu</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}