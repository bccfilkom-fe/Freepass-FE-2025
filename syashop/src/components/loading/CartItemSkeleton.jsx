import React from "react";

const CartItemSkeleton = () => {
  return (
    <div className="w-full rounded-xl px-4 aspect-video min-h-[9rem] md:h-[10rem] relative flex shadow-md border-2 animate-pulse">
      <div className="absolute rotate-45 right-2 top-2 bg-gray-300 h-6 w-6"></div>
      <div className="w-[40%] object-contain aspect-square p-4 bg-gray-300"></div>
      <div className="w-[60%] py-4 flex flex-col justify-center space-y-2">
        <span className="bg-gray-300 h-4 w-1/2 rounded"></span>
        <h1 className="bg-gray-300 h-6 w-full rounded"></h1>
        <h4 className="bg-gray-300 h-4 w-1/3 rounded"></h4>
        <div className="flex items-center space-x-2">
          <div className="bg-gray-300 h-6 w-6 rounded"></div>
          <span className="bg-gray-300 h-6 w-6 rounded"></span>
          <div className="bg-gray-300 h-6 w-6 rounded"></div>
        </div>
        <span className="bg-gray-300 h-4 w-1/4 rounded"></span>
      </div>
    </div>
  );
};

export default CartItemSkeleton;
