"use client";

import Link from "next/link";
import { Webhook } from "lucide-react";
import type React from "react";
import { motion } from "framer-motion";

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
  >
    {children}
  </Link>
);

export function Navbar() {
  return (
    <motion.nav
      className="bg-white shadow-lg hidden md:block fixed top-0 z-50 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 4 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <Link href="/" className="flex items-center py-4 px-2">
              <Webhook className="h-8 w-8 mr-2 text-blue-600" />
              <span className="font-semibold text-gray-800 text-lg">
                Dummy Store
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <NavItem href="#features">Features</NavItem>
            <NavItem href="#about">About Us</NavItem>
            <NavItem href="#product">Products</NavItem>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
