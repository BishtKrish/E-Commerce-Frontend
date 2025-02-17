import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import newlogo from '../Assests/newlogo.png'
import cart_icon from '../Assests/cart_icon.png'
import { ShopContext } from '../../Contexts/ShopContext';

const Navbar = () => {
  const{getTotalCartItems}=useContext(ShopContext);
  const [menu, setmenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={newlogo} alt="" />
        
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setmenu("shop") }}><Link style={{textDecoration:'none'}} to='/' >Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setmenu("men") }}><Link style={{textDecoration:'none'}} to='/mens' >Men</Link>{menu === "men" ? <hr /> : <></>}</li>
        <li onClick={() => { setmenu("women") }}><Link style={{textDecoration:'none'}} to='/womens' >Women</Link>{menu === "women" ? <hr /> : <></>}</li>
        <li onClick={() => { setmenu("kids") }}><Link style={{textDecoration:'none'}} to='/kids' >Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
       <Link style={{textDecoration:'none'}} to='/login'><button>Login</button></Link> 
       <Link style={{textDecoration:'none'}} to='/cart'><img src={cart_icon} alt="" /></Link> 
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>

    </div>
  )
}

export default Navbar
