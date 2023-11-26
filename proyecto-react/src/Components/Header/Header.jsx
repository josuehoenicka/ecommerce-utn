import React from "react";
import "./Header.css";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { Context } from "../../Context";

function Header() {
  const { cart } = useContext(Context);

  return (
    <header>
      <FaCartShopping className="cart-icon" />
      <span className="cart-count">{cart.length}</span>
    </header>
  );
}

export default Header;
