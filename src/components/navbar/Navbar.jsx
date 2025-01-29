"use client";

import Hamburger from "hamburger-react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CartNotification from "../ui/CartNotification";
import MobileNav from "./MobileNav";
import Cookies from "js-cookie";
import LoginBtn from "../ui/LoginBtn";
import { DoorClosed, DoorClosedIcon, DoorOpen, LogOut } from "lucide-react";
import { logoutUser } from "@/services/login";
import LogOutBtn from "../ui/LogOutBtn";

const NavLink = [
  { name: "Home", link: "/home" },
  { name: "Products", link: "/products" },
];

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  useEffect(() => {
    setToken(Cookies.get("token"));
    setUsername(Cookies.get("username"));
  }, []);

  return (
    <nav className=" w-full h-12 mt-4 grid-cols-3 relative  flex items-center justify-between">
      <h1 className="font-bold text-3xl w-1/4 text-primary ">
        <Link href={"/home"}>syashop</Link>
      </h1>
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
      <div className="gap-x-2 w-1/4 flex items-center">
        <Link href={"/cart"}>
          <CartNotification />
        </Link>
        {token ? (
          <div className="justify-center items-center gap-x-4 lg:flex hidden">
            <img className="aspect-square rounded-full w-8 bg-primary" />
            <div className="text-xs">
              <h5>Welcome Back !</h5>
              <h5 className="font-semibold flex gap-2">{username}</h5>
            </div>
            <LogOutBtn />
          </div>
        ) : (
          <LoginBtn className="lg:block hidden" />
        )}
        <div className="lg:hidden mr-10 ">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          {isOpen && <MobileNav />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
