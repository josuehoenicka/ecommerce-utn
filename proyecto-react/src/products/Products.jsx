import React from 'react';
import './Products.css';

import Layout from '../layout-container/Layout';

// "https://lavaindumentaria.com.ar/wp-content/uploads/2023/05/Sin-titulo-12.jpg"

function Products({title, imgSrc, price, category, offer}) {
  return (

      <div className="releases-product-container">
        <div className="realases-products">
          <div className="realeses-image-container">
            <img className="realeses-img" src={imgSrc} alt={title}/>
          </div>
          <div className="realeses-description-container">
            <p className="realeses-type">{category}</p>
            <p className="realeses-name">{title}</p>
            <p className="realeses-price">${price}</p>
          </div>
        </div>
      </div>
  );
}

export default Products;
