"use client";

import { CartContext } from "@/context/CartContext";
import React, { useState, useContext } from "react";

const AddToCartBtn = ({ product }) => {
  const { addToCart, clearCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const increaseQuantity = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));
  };

  return (
    <div className="">
      <label htmlFor="quantity">Quantity:</label>
      <div className="flex flex-col">
        <span className="text-xl font-bold">Qty</span>
        <div className="text-xl my-2 flex justify-between font-bold">
          <div>
            <button
              onClick={decreaseQuantity}
              className="text-blue-400 px-2 py-1"
            >
              -
            </button>
            <span className="p-4">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="text-blue-400 px-2 py-1"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button
        className=" w-full text-white font-semibold text-xl rounded-md bg-primary"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartBtn;
