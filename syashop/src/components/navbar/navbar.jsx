"use client";

import Hamburger from "hamburger-react";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import CartNotification from "../ui/CartNotification";
import MobileNav from "./MobileNav";

const NavLink = [
  { name: "Home", link: "/home" },
  { name: "Products", link: "/products" },
];

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className=" w-full h-12 mt-4 grid-cols-3  flex items-center justify-between">
      <h1 className="font-bold text-3xl w-1/4 text-primary ">syashop</h1>
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
      <Link className=" lg:ml-10 ml-28" href={"/cart"}>
        <CartNotification />
      </Link>
      <div className="justify-center items-center gap-x-4 lg:flex hidden">
        <img className="aspect-square rounded-full w-8 bg-primary" />
        <div className="text-xs">
          <h5>Welcome Back !</h5>
          <h5 className="font-semibold">username</h5>
        </div>
      </div>
      <div className="lg:hidden ">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && <MobileNav />}
      </div>
    </nav>
  );
};

export default Navbar;
