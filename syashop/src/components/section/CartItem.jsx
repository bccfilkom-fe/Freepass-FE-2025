import { Cross, Plus } from "lucide-react";
import React from "react";

const CartItem = ({
  img,
  title,
  category,
  price,
  totalPrice,
  productPlus,
  productMinus,
  quantity,
  removeCartItem,
}) => {
  return (
    <div className="w-full rounded-xl aspect-video min-h-[9rem] md:h-[10rem] relative flex shadow-md border-2">
      <button onClick={removeCartItem}>
        <Plus className=" absolute rotate-45 right-2 top-2 text-red-500" />
      </button>
      <img
        src={img}
        className="w-[40%] object-contain aspect-square p-4"
        alt=""
      />
      <div className="w-[60%]py-4 flex flex-col justify-center">
        <span className="font-bold text-xs md:text-lg text-primary">
          {category}
        </span>
        <span>{title}</span>
        <h4 className="font-bold">
          $ {price} <span className="font-light text-sm">/ item</span>
        </h4>
        <div className="flex items-center font-bold space-x-2">
          <button
            onClick={productMinus}
            className=" text-primary px-2 py-1 rounded"
          >
            -
          </button>
          <span className="font-bold">{quantity}</span>
          <button
            onClick={productPlus}
            className=" text-primary px-2 py-1 rounded"
          >
            +
          </button>
        </div>
        <span className="text-xs font-bold">Total :{totalPrice} </span>
      </div>
    </div>
  );
};

export default CartItem;
