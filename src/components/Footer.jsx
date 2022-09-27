import React from 'react'
import logo from '../img/logo.png';

const Footer = () => {
  return (
    <div className='footer'>
      <img src={logo} alt="" />

      <div className="container">
        <div className='aboutUs'>
          <h3>ABOUT US</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
        </div>

        <div className='getNews'>
          <h3>GET NEWS & OFFERS</h3>
          <input type="email" name="" placeholder="Enter your email" />
          <ul>
            <li><i className="fa-brands fa-twitter"/></li>
            <li><i className="fa-brands fa-instagram"/></li>
            <li><i className="fa-brands fa-whatsapp"/></li>
            <li><i className="fa-brands fa-linkedin-in"/></li>
          </ul>
        </div>

        <div className='contactUs'>
          <h3>CONTACT US</h3>
          <span>Knowledgeable Group of Tech</span>
          <span>+ 977 9834723240</span>
          <span>kgtinfo@gmail.com</span>
          <span>www.kgt.in</span>
        </div>
      </div>

      <p className='copy'>&copy;2022 Reserved by Knowledgeable Group of Tech ~ KGT</p>
    </div>
  )
}

export default Footer