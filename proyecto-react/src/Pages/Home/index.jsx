import React, {useState, useEffect} from 'react';
import Layout from '../../Components/Layout/Layout';
import Products from '../../Components/Products/Products';

function Home() {

    const [products, setProducts] = useState([]);

    const fetchData = async ()=>{
        try{
            const response = await fetch("https://api.escuelajs.co/api/v1/products");
            const data = await response.json();
            setProducts(data);
            console.log(data);
        }catch(e){
            console.error(e);
        }
    }

    useEffect(()=>{
        fetchData();
        console.log(products);
    }, []);

  return (
    <div>
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
      </Layout>
    </div>
  )
}

export default Home
