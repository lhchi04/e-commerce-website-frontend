import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { useRef } from 'react'
import nav_dropdown from '../Assets/icons8-menu-bar.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  //Sidebar
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>      
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>BRAND NAME</p>
      </div>
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("shampoo")}}><Link style={{ textDecoration: 'none' }} to='/shampoo'>Shampoo</Link>{menu==="shampoo"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("conditioner")}}><Link style={{ textDecoration: 'none' }} to='/conditioner'>Conditioner</Link>{menu==="conditioner"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("about")}}><Link style={{ textDecoration: 'none'  }} to='/about'>About</Link>{menu==="about"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}>Log out</button>
        :<Link to='/login'><button>Login</button></Link>}
        <Link to='/cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45px" height="45px"><path fill="#EBE8BE" d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" /></svg></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}
export default Navbar
