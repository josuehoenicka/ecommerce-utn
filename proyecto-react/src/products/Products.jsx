import React from 'react';
import './Products.css';

function Products() {
  return (
    <div className="releases-container">
      <div>
        <img className="releases-title" src="./assets/icons/releases.png" alt="" />
      </div>
      <div className="releases-product-container">
        <div className="realases-products">
          <div className="realeses-image-container">
            <a href=""><img className="realeses-img" src="https://lavaindumentaria.com.ar/wp-content/uploads/2023/05/Sin-titulo-12.jpg" alt="" /></a>
          </div>
          <div className="realeses-description-container">
            <p className="realeses-type">CAMISA</p>
            <p className="realeses-name">CAMISA CASUAL DE NOB</p>
            <p className="realeses-price">$ 15,00</p>
            <p className="realeses-installments">3 CUOTAS SIN INTERÉS</p>
          </div>
        </div>
        <div className="realases-products">
          <div className="realeses-image-container">
            <a href=""><img className="realeses-img" src="https://img.freepik.com/foto-gratis/par-entrenadores_144627-3800.jpg" alt="" /></a>
          </div>
          <div className="realeses-description-container">
            <p className="realeses-type">ZAPATO</p>
            <p className="realeses-name">LAQUEFRINGI FORCE II</p>
            <p className="realeses-price">$ 49,99</p>
            <p className="realeses-installments">7 CUOTAS SIN INTERÉS</p>
          </div>
        </div>
        <div className="realases-products">
          <div className="realeses-image-container">
            <a href=""><img className="realeses-img" src="https://s.libertaddigital.com/2022/03/07/pantalones-de-trabajo-para-hombre-goodyear-workwear-gypnt001.jpg" alt="" /></a>
          </div>
          <div className="realeses-description-container">
            <p className="realeses-type">PANTALON</p>
            <p className="realeses-name">MONOSTEIKER SPORT</p>
            <p className="realeses-price">$ 25,00</p>
            <p className="realeses-installments">2 CUOTAS SIN INTERÉS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
