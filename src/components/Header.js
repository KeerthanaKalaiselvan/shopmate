import React from 'react'
import { Link, NavLink } from "react-router-dom";
import './Header.css'
import Logo from "../assets/logo.png"

const Header = () => {
  return (
    <header>
      <Link to='/' className='logo'>
        <img src={Logo} alt='logo' />
        <span>Shopping Cart</span>
      </Link>
      <nav className='navigation'>
        <NavLink to='/' className='link'>Home</NavLink>
        <NavLink to='/cart' className='link'>Cart</NavLink>
      </nav>
      <Link to='/cart' className='link'>
        <span>cart:2</span>
      </Link>
   </header>
  )
}

export default Header
