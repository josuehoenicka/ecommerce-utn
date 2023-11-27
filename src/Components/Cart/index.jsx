import React, {useContext} from 'react'

import { Context } from '../../Context'

import "./index.css"

import { FaXmark } from 'react-icons/fa6';

import { FaRegTrashAlt } from "react-icons/fa";

function Cart() {

    const {cartProducts, setCartProducts, openCartAside, setOpenCartAside, setCounter} = useContext(Context);

    const closeCart = ()=>{
      setOpenCartAside(false)
    }

    const deleteProduct = (id) =>{
      const newCart = [...cartProducts];
      const itemIndex = newCart.findIndex(item => item.id === id);
      newCart.splice(itemIndex, 1);
      setCounter(newCart.length)
      setCartProducts(newCart)
    }

    console.log(cartProducts);

  return (
    <aside className={openCartAside ? "cart open" : "cart close"}>

      <FaXmark className='x-icon x-icon2' 
            onClick={()=> closeCart()}
      />
      <h2>My order</h2>

      <div className="container-cart">
      {
        
        cartProducts && cartProducts?.map(item => (
          <div className='product'>
            <img className='cart-img' src={item.imgSrc} alt="" />
            <p className='cart-title'>{item.title}</p>
            <p className='cart-price'>${item.price}</p>

            <FaRegTrashAlt className={openCartAside ? "trash-icon show-icon" : "trash-icon hide-icon"} onClick={() => deleteProduct(item.id)}/>
          </div>
        ))
        
    }


    {
      cartProducts.length === 0 && <h2 className='no-items'>No items</h2>
    }
      </div>
      
    </aside>
  )
}

export default Cart
