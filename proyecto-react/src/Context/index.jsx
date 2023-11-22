import React, {createContext, useState, useEffect} from 'react';

export const Context = createContext()

function ContextProvider({children}) {
    
    const [addToCart, setAddToCart] = useState(false);
    const [cartProducts, setCartProducts] = useState([]);
      const [counter, setCounter] = useState(cartProducts.length);
      const [products, setProducts] = useState(null);
      const [openProductDetail, setOpenProductDetail] = useState(false);
      const [productCard, setProductCard] = useState({});
      const [openCartAside, setOpenCartAside] = useState(false);
      const [openNotification, setOpenNotification] = useState(false);

      const fetchData = async ()=>{
        try{
            const response = await fetch("https://api.escuelajs.co/api/v1/products");
            const data = await response.json();
            setProducts(data);
            // console.log(data);
        }catch(e){
            console.error(e);
        }
    }

    useEffect(()=>{
        fetchData();
        console.log(products);
    }, []);


    return (
        <Context.Provider
            value={{
                addToCart, 
                setAddToCart,
                cartProducts, 
                setCartProducts,
                counter, 
                setCounter,
                products, 
                setProducts,
                openProductDetail, 
                setOpenProductDetail,
                productCard, 
                setProductCard,
                openCartAside, 
                setOpenCartAside,
                openNotification, 
                setOpenNotification
            }}
        >
            {children}
        </Context.Provider>
    )
}


export default ContextProvider