"use client";

import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    const storedUsername = Cookies.get("username");
    setIsLoggedIn(!!token);
    setUsername(storedUsername || "");

    if (token && storedUsername) {
      const storedCart = sessionStorage.getItem(`cart_${storedUsername}`);
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn && username) {
      sessionStorage.setItem(`cart_${username}`, JSON.stringify(cart));
    }
  }, [cart, isLoggedIn, username]);

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
    if (username) {
      sessionStorage.removeItem(`cart_${username}`);
    }
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
        isLoggedIn,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
