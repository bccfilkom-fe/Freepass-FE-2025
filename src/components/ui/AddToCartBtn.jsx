"use client";

import { CartContext } from "@/context/CartContext";
import React, { useState, useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastSuccess from "../alert/Succes";
import Cookies from "js-cookie";
import ToastFailed from "../alert/Failed";

const AddToCartBtn = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(Cookies.get("token"));
  }, []);

  const handleAddToCart = () => {
    if (!token) {
      ToastFailed();
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      addToCart(product, quantity);
      ToastSuccess();
    }, 1000);
  };

  const increaseQuantity = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));
  };

  return (
    <div>
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
        className="w-full active:scale-105 transition-all py-2 text-white font-semibold text-xl rounded-md bg-primary"
        onClick={handleAddToCart}
        disabled={loading}
      >
        {loading ? "Adding..." : "Add to Cart"}
      </button>

      <ToastContainer />
    </div>
  );
};

export default AddToCartBtn;
