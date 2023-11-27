import React, {useState, useContext} from 'react';
import "./Header.css";

import { FaCartShopping } from "react-icons/fa6";


import { Context } from '../../Context';


// const showMobileMenu = () => {
//     if(mobileMenu){
        
//     }
// }

function Header() {

  const {cartProducts, setCartProducts, openCartAside, setOpenCartAside, setOpenProductDetail,counter} = useContext(Context);

  const showCart = ()=>{
    if(openCartAside){
      setOpenCartAside(false);
    }else{
      setOpenCartAside(true);
    }

    setOpenProductDetail(false)
  }

  return (
    <header>
        <FaCartShopping className='cart-icon' onClick={() => showCart()}/>
        <p className='counter'>{counter}</p>
    </header>
  )
}

export default Header
