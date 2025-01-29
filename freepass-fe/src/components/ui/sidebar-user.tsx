"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Webhook, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type React from "react";

const NavItem = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    href={href}
    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 block"
    onClick={onClick}
  >
    {children}
  </Link>
);

export function SidebarUser() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {isOpen ? null : (
        <button
          className="md:hidden fixed top-4 left-4 z-50"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <Menu className="h-8 w-8 text-gray-500 bg-white p-1 border-2 rounded-md" />
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-40 md:hidden"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <Link
                href="/"
                className="flex items-center"
                onClick={closeSidebar}
              >
                <Webhook className="h-8 w-8 mr-2 text-blue-600" />
                <span className="font-semibold text-gray-800 text-lg">
                  Dummy Store
                </span>
              </Link>
              <button onClick={closeSidebar} aria-label="Close sidebar">
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            <nav className="p-4">
              <NavItem href="#features" onClick={closeSidebar}>
                Features
              </NavItem>
              <NavItem href="#about" onClick={closeSidebar}>
                About Us
              </NavItem>
              <NavItem href="#product" onClick={closeSidebar}>
                Products
              </NavItem>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={closeSidebar}
        />
      )}
    </>
  );
}
