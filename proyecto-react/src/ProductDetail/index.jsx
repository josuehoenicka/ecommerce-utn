import React, {useContext} from 'react'
import {Context} from "../Context"

import { FaXmark } from "react-icons/fa6";

import "./index.css"

function ProductDetail() {
    const {openProductDetail, setOpenProductDetail, productCard} = useContext(Context);

    const closeProductDetail = ()=>{
        setOpenProductDetail(false)
    }

    // console.log(productCard);
  
    if(openProductDetail){
        return (
            <aside className={openProductDetail && "open"}>
                <FaXmark className='x-icon' 
                onClick={()=> closeProductDetail()}
                />
                <h3>Detail</h3>
                <figure>
                    <img src={productCard.imgSrc} alt="imagen" />
                </figure>
                <p className='price'>${productCard.price}</p>
                <p className='product-title'>{productCard.title}</p>
            </aside>
          )
    }
}

export default ProductDetail
