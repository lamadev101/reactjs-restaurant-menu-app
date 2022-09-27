import React from 'react'
import logo from '.././img/logo.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <a href='#home' className="logo">
            <img src={logo} alt="" />
        </a>
        <div className='tabs'>
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#menu">menu</a>
            <a href="#team">team</a>
            <a href="#reservation">reservation</a>
            <a href="#blog">blog</a>
        </div>
        <div className="icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-heart"></i>
          <i className="fas fa-shopping-cart"></i>
        </div>
    </div>
  )
}

export default Navbar