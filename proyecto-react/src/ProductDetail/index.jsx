import React, { useContext } from "react";
import { Context } from "../Context";

import { FaXmark } from "react-icons/fa6";

import "./index.css";

function ProductDetail() {
  const { openProductDetail, setOpenProductDetail, productCard } =
    useContext(Context);

<<<<<<< HEAD
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
=======
  const showProductDetail = () => {
    setOpenProductDetail(false);
  };

  console.log(productCard);

  if (openProductDetail) {
    return (
      <aside>
        <FaXmark className="x-icon" onClick={() => showProductDetail()} />
        <h3>Detail</h3>
        <figure>
          <img src={productCard.imgSrc} alt="imagen" />
        </figure>
        <p className="price">${productCard.price}</p>
        <p className="product-title">{productCard.title}</p>
      </aside>
    );
  }
>>>>>>> c083e289a718624aab25031c5ec62edd8a015f58
}

export default ProductDetail;
