"use client";

import { ShoppingBasketIcon } from "lucide-react";
import { CartContext } from "@/context/CartContext";
import { useContext, useEffect, useState } from "react";

const CartNotification = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.amount, 0);

  return (
    <div className="relative">
      <ShoppingBasketIcon className="w-8 h-8" />
      {totalItems > 0 && (
        <span className="absolute bottom-0 right-4 bg-red-500 text-white w-5 text-xs h-5 flex items-center justify-center aspect-square rounded-full">
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartNotification;
