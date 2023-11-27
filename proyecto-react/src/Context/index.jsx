import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(null);
  const [openProductDetail, setOpenProductDetail] = useState(false);
  const [productCard, setProductCard] = useState({});
  const [openCartAside, setOpenCartAside] = useState(false);

<<<<<<< HEAD

      const fetchData = async ()=>{
        try{
            const response = await fetch("https://api.escuelajs.co/api/v1/products");
            const data = await response.json();
            setProducts(data);
            // console.log(data);
        }catch(e){
            console.error(e);
        }
=======
  const fetchData = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setProducts(data);
    } catch (e) {
      console.error(e);
>>>>>>> c083e289a718624aab25031c5ec62edd8a015f58
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Context.Provider
      value={{
        cart,
        setCart,
        products,
        openProductDetail,
        setOpenProductDetail,
        productCard,
        setProductCard,
        openCartAside,
        setOpenCartAside,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
