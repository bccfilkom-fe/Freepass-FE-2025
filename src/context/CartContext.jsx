"use client";

import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = sessionStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, qty) => {
    const cartItem = cart.find((item) => item.product.id === product.id);
    let newCart;

    if (cartItem) {
      newCart = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, amount: item.amount + qty }
          : item
      );
    } else {
      newCart = [...cart, { product, amount: qty }];
    }

    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const removeCartItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== id));
  };

  const incrementItemQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  const decrementItemQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === id
          ? { ...item, amount: Math.max(item.amount - 1, 1) }
          : item
      )
    );
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeCartItem,
        incrementItemQuantity,
        decrementItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
