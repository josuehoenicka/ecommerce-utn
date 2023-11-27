<<<<<<< HEAD
import React, {useState, useContext} from 'react';
=======
import React from "react";
>>>>>>> c083e289a718624aab25031c5ec62edd8a015f58
import "./Header.css";
import { FaCartShopping } from "react-icons/fa6";
<<<<<<< HEAD


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
=======
import { useContext } from "react";
import { Context } from "../../Context";

function Header() {
  const { cart } = useContext(Context);

  return (
    <header>
      <FaCartShopping className="cart-icon" />
      <span className="cart-count">{cart.length}</span>
>>>>>>> c083e289a718624aab25031c5ec62edd8a015f58
    </header>
  );
}

export default Header;
