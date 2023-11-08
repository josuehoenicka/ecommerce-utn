import React from 'react'

import Products from '../products/Products';
import Layout from '../layout-container/Layout';

function Home() {
  return (
    <div>
      <Layout>
        <Products 
        title={"Casual shirt"}
        imgSrc={"https://lavaindumentaria.com.ar/wp-content/uploads/2023/05/Sin-titulo-12.jpg"}
        price="15,00"
        category="Men's clothing"
        />
        <Products 
        title={"LAQUEFRINGI FORCE II"}
        imgSrc={"https://img.freepik.com/foto-gratis/par-entrenadores_144627-3800.jpg"}
        price="49,99"
        category="Shoes"
        />
        <Products 
        title={"MONOSTEIKER SPORT"}
        imgSrc={"https://s.libertaddigital.com/2022/03/07/pantalones-de-trabajo-para-hombre-goodyear-workwear-gypnt001.jpg"}
        price="25,00"
        category="Trousers"
        />
      </Layout>
    </div>
  )
}

export default Home
