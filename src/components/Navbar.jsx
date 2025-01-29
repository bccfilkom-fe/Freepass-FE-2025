import React from "react";
import useNavbarToggle from "../hooks/Navbar"; // Sesuaikan dengan path yang benar
import { FaShoppingCart } from "react-icons/fa";
import Keranjang from "./Keranjang";

const Navbar = () => {
    const { isMenuOpen, toggleMenu, isCartOpen, toggleCart } = useNavbarToggle();

    return (
        <nav className=" bg-amber-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="assets/logo.png" class="h-10" alt="CanEaten Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CanEaten</span>
                </a>


                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        onClick={toggleCart}
                        className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-amber-600 dark:focus:ring-amber-800">
                        <FaShoppingCart className="text-lg" />
                    </button>
                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-amber-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-amber-400 dark:hover:bg-amber-700 dark:focus:ring-amber-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen}>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-center ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-amber-100 rounded-lg bg-amber-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-amber-800 md:dark:bg-amber-900 dark:border-amber-700">
                        <li>
                            <a href="#home" className="block py-2 px-3 text-white bg-amber-700 rounded-sm md:bg-transparent md:text-amber-700 md:p-0 md:dark:text-amber-500" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#menu" className="block py-2 px-3 text-amber-900 rounded-sm hover:bg-amber-100 md:hover:bg-transparent md:hover:text-amber-700 md:p-0 md:dark:hover:text-amber-500 dark:text-white dark:hover:bg-amber-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-amber-700">Menu</a>
                        </li>
                        <li>
                            <a href="#contact" className="block py-2 px-3 text-amber-900 rounded-sm hover:bg-amber-100 md:hover:bg-transparent md:hover:text-amber-700 md:p-0 md:dark:hover:text-amber-500 dark:text-white dark:hover:bg-amber-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-amber-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            {isCartOpen && (
                <div className="absolute right-4 top-16 bg-white p-4 shadow-md rounded-lg">
                    <p className="text-amber-700"><Keranjang /></p>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
