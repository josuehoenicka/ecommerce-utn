import React, {useState} from 'react';
import "./Header.css";

import { GiHamburgerMenu } from "react-icons/gi"


// const showMobileMenu = () => {
//     if(mobileMenu){
        
//     }
// }

function Header() {

    const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header>
        <nav>
            <ul className='desktop-menu'>
                <li>Electronics</li>
                <li>Jewelry</li>
                <li>Men's clothing</li>
                <li>Women's clothing</li>
            </ul>
            
            {/* {

            mobileMenu &&  */}
            <ul className={`mobile-menu ${mobileMenu && "showMenu"}`}>
                <li>Electronics</li>
                <li>Jewelry</li>
                <li>Men's clothing</li>
                <li>Women's clothing</li>
            </ul>
            {/* } */}

            <GiHamburgerMenu className='burger-icon' id='burger-icon' onClick={()=> setMobileMenu(!mobileMenu)} />
        </nav>
    </header>
  )
}

export default Header
