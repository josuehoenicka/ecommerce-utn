import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(null);
  const [openProductDetail, setOpenProductDetail] = useState(false);
  const [productCard, setProductCard] = useState({});
  const [openCartAside, setOpenCartAside] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setProducts(data);
    } catch (e) {
      console.error(e);
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
