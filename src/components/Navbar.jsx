import React from 'react'
import navbarcss from '../style/navbar.css' 


export default function Navbar() {
  return (
   <>
    <nav>
        <div className="logo">
            <img src="reoonews.png" alt="Logo Image" />
        </div>
        <div className="hamburger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">Solutions</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><button className="login-button" href="/">Login</button></li>
            <li><button className="join-button" href="/">Join</button></li>
        </ul>
    </nav>
    
   </>
  )
}
