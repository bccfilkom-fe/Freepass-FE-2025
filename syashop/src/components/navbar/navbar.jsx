"use client";

import Hamburger from "hamburger-react";
import { ShoppingBasketIcon } from "lucide-react";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import { CartContext } from "@/context/CartContext";

const NavLink = [
  { name: "Home", link: "/home" },
  { name: "Products", link: "/products" },
  { name: "Category", link: "/category" },
];

export const MobileNav = ({ isOpen }) => {
  return (
    <div className="bg-slate-200 w-full z-10 left-0 absolute  h-[10rem] mx-0 container "></div>
  );
};

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useContext(CartContext);

  return (
    <nav className=" w-full h-12 mt-4 grid-cols-3  flex items-center justify-between">
      <h1 className="font-bold text-3xl w-1/4 ">syashop</h1>
      <ul className=" gap-4 text-xl justify-center w-2/4 lg:flex hidden">
        {NavLink.map((item, index) => (
          <li
            className={
              pathname === item.link || pathname.startsWith(item.link)
                ? `font-bold text-primary border-b-2 border-primary  duration-300 transition-all`
                : `opacity-60 active:scale-90 transition-all duration-200`
            }
            key={index}
          >
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="w-1/4 justify-center items-center gap-x-4 lg:flex hidden">
        <ShoppingBasketIcon className=" w-8 h-8" />
        <span>{totalItems()}</span>
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
