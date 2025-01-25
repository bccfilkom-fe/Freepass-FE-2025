"use client";

import Hamburger from "hamburger-react";
import { ShoppingBasketIcon } from "lucide-react";
import React, { useState } from "react";

export const MobileNav = ({ isOpen }) => {
  return (
    <div className="bg-slate-200 w-full left-0 absolute  h-[10rem] mx-0 container "></div>
  );
};

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className=" w-full h-12 mt-4 grid-cols-3 flex items-center justify-between">
      <h1 className="font-bold text-3xl w-1/4 ">syashop</h1>
      <ul className=" gap-4 text-xl justify-center w-2/4 lg:flex hidden">
        <li>Home</li>
        <li>Product</li>
      </ul>
      <div className="w-1/4 justify-center items-center gap-x-4 lg:flex hidden">
        <ShoppingBasketIcon className=" w-8 h-8" />
        <img className="aspect-square rounded-full w-8 bg-primary" />
        <div className="text-xs">
          <h5>Welcome Back !</h5>
          <h5 className="font-semibold">username</h5>
        </div>
      </div>
      <div className="lg:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && <MobileNav />}
      </div>
    </nav>
  );
};

export default Navbar;
