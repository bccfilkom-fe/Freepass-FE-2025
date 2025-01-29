import { ShoppingBasket } from "lucide-react";
import React from "react";
import Cart from "@/assets/img/Cart.png";
import Image from "next/image";
import Link from "next/link";
const EmptyCart = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center  overflow-hidden  rounded-xl">
      <Image className="w-72 " src={Cart} alt="cart" />
      <h4 className="text-center">
        Your cart is currently empty. Start adding items to fill it up with your
        favorite products!
      </h4>
      <Link
        className="bg-primary px-4 py-1 rounded-lg text-white mt-4"
        href={"/products"}
      >
        Go shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
