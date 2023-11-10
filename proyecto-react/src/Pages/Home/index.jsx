import React, {useState, useEffect} from 'react';
import Layout from '../../Components/Layout/Layout';
import Products from '../../Components/Products/Products';

function Home() {

    const [products, setProducts] = useState([]);

    const fetchData = async ()=>{
        try{
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
        }catch(e){
            console.error(e);
        }
    }

    useEffect(()=>{
        fetchData();
    }, []);

  return (
    <div>
      <Layout>
        {products?.map(product =>(
                <Products
                    title={product.title}
                    price={product.price}
                    key={product.id}
                    category={product.category}
                    imgSrc={product.image}
                />
            )
        )}
      </Layout>
    </div>
  )
}

export default Home
