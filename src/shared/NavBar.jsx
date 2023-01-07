import React from 'react'
import './styles/navbar.css'
const NavBar = ({handleCart}) => {
  return (
    <div>
 <nav className='navbar'>
    <div className="menu">
      <h1 className='home_nav'><a href="#">e-commerce</a></h1>
      <ul>
        
        <li><a href="#/login"><i className="fa-solid fa-user-large"></i></a></li>
        <li><a href="#/purchases"><i className="fa-solid fa-store"></i></a></li>
        <li onClick={handleCart}><a href="#/cart"><i className="fa-solid fa-cart-shopping"></i></a></li>
      </ul>
    </div>
    </nav>
    </div>
  )
}

export default NavBar