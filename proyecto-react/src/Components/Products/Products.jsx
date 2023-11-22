import React from 'react';
import './Products.css';

import { useContext } from 'react';
import { Context } from '../../Context';

import {AiOutlinePlus} from "react-icons/ai"


function Products(data) {

  const {setOpenProductDetail, setProductCard, setOpenCartAside} = useContext(Context);

  const showProduct = (productData)=>{
    setOpenProductDetail(true);
    setProductCard(productData)
    setOpenCartAside(false);
  }


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
