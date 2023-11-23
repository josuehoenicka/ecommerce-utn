import React, {useState} from 'react';
import "./Header.css";

import { FaCartShopping } from "react-icons/fa6";

import { GiHamburgerMenu } from "react-icons/gi"


// const showMobileMenu = () => {
//     if(mobileMenu){
        
//     }
// }

function Header() {


  return (
    <header>
        <FaCartShopping className='cart-icon'/>
    </header>
  )
}

export default Header
