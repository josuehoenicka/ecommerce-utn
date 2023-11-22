import React from 'react';
import './Products.css';

import { useContext } from 'react';
import { Context } from '../../Context';

import {AiOutlinePlus} from "react-icons/ai"



// "https://lavaindumentaria.com.ar/wp-content/uploads/2023/05/Sin-titulo-12.jpg"

function Products(data) {

  const {setOpenProductDetail, setProductCard, setOpenCartAside, setOpen} = useContext(Context);

  const showProduct = (productData)=>{
    setOpenProductDetail(true);
    setProductCard(productData)
    setOpenCartAside(false);
    setOpen(false)
  }

  console.log({setOpenProductDetail, setProductCard, setOpenCartAside, setOpen});

  return (

      <div className="releases-product-container" onClick={()=> showProduct(data)}>
        <div className="realases-products">
          <AiOutlinePlus className='add-icon'/>
          <div className="realeses-image-container">
            <img className="realeses-img" src={data.imgSrc} alt={data.title}/>
          </div>
          <div className="realeses-description-container">
            <p className="realeses-type">{data.category}</p>
            <p className="realeses-name">{data.title}</p>
            <p className="realeses-price">${data.price}</p>
          </div>
        </div>
      </div>
  );
}

export default Products;
