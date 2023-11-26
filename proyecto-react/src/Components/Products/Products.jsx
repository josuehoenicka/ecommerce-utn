import React, { useState, useEffect } from "react";
import "./Products.css";
import { FaTimes } from "react-icons/fa";

import { useContext } from "react";
import { Context } from "../../Context";

import { AiOutlinePlus } from "react-icons/ai";

function Products(data) {
  const {
    setOpenProductDetail,
    setProductCard,
    setOpenCartAside,
    cart,
    setCart,
  } = useContext(Context);

  const isInCartInitially = cart.some((item) => item.id == data.id);
  const [isInCart, setIsInCart] = useState(isInCartInitially);

  useEffect(() => {
    setIsInCart(cart.some((item) => item.id == data.id));
  }, [cart, data]);

  const toggleCart = () => {
    if (isInCart) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== data.id));
    } else {
      setCart((prevCart) => [...prevCart, data]);
    }
  };

  const showProduct = (productData) => {
    setOpenProductDetail(true);
    setProductCard(productData);
    setOpenCartAside(false);
  };

  return (
    <div
      className="releases-product-container"
      onClick={() => showProduct(data)}
    >
      <div className="realases-products">
        {isInCart ? (
          <FaTimes
            className="remove-icon"
            onClick={(e) => {
              e.stopPropagation();
              toggleCart();
            }}
          />
        ) : (
          <AiOutlinePlus
            className="add-icon"
            onClick={(e) => {
              e.stopPropagation();
              toggleCart();
            }}
          />
        )}
        <div className="realeses-image-container">
          <img
            className="realeses-img"
            img={data.images[0]}
            alt={data.title}
          />
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
