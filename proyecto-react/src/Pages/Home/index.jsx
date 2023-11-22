import React, {useState, useEffect} from 'react';
import Layout from '../../Components/Layout/Layout';
import Products from '../../Components/Products/Products';

import { Context } from '../../Context';
import { useContext } from 'react';
import ProductDetail from '../../ProductDetail';

function Home() {

    const {products} = useContext(Context);

    
  return (
      <Layout>
        {products?.map(product =>(
                <Products
                    title={product.title}
                    price={product.price}
                    key={product.id}
                    category={product.category.name}
                    imgSrc={product.images[0]}
                />
            )
        )}

        <ProductDetail/>

      </Layout>
  )
}

export default Home
