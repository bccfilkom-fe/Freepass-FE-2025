"use client";

import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
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
    sessionStorage.removeItem("cart");
  };
  const updateCartItemAmount = (id, newAmount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === id ? { ...item, amount: newAmount } : item
      )
    );
  };
  const removeCartItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== id));
  };

  const totalItems = () => {
    return cart.reduce((acc, item) => acc + item.amount, 0);
  };

  return (
    <CartContext.Provider
      value={{
        totalItems,
        addToCart,
        clearCart,
        updateCartItemAmount,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
