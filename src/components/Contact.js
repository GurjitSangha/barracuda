import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div class="container">
        <div class="section-title">
          <h2><span>Find</span> Us</h2>
        </div>
      </div>

      <div className="map">
        <iframe title="map" style={{ border: 0, width: '100%', height: '350px'}} src="https://maps.google.com/maps?q=219%20duke%20street%20sheffield&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen></iframe>
      </div>

      <div className="container mt-5">
        <div className="info-wrap">
          <div className="row">
            <div className="col-lg-4 col-md-4 info mt-4 mt-lg-0">
              <i className="icofont-google-map"></i>
              <h4>Location:</h4>
              <p>219 Duke Street<br/>Sheffield S2 5QP</p>
            </div>

            <div className="col-lg-4 col-md-4 info mt-4 mt-lg-0">
              <i className="icofont-clock-time icofont-rotate-90"></i>
              <h4>Open Hours:</h4>
              <p>Monday - Friday:<br/>11:30 AM - 19:00 PM</p>
            </div>

            <div class="col-lg-4 col-md-4 info mt-4 mt-lg-0">
              <i class="icofont-phone"></i>
              <h4>Call:</h4>
              <p>0114 272 7154</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}