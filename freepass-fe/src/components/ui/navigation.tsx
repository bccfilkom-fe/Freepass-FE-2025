"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Webhook, X, Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const NavItem = ({
  href,
  children,
  onClick,
  className,
}: { href: string; children: React.ReactNode; onClick?: () => void; className?: string }) => (
  <Link
    href={href}
    className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${className || ""}`}
    onClick={onClick}
  >
    {children}
  </Link>
)

function Navbar() {
  return (
    <nav className="bg-white shadow-lg hidden md:block">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <Link href="/" className="flex items-center py-4 px-2">
              <Webhook className="h-8 w-8 mr-2 text-blue-600" />
              <span className="font-semibold text-gray-800 text-lg">Dummy Store</span>
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <NavItem href="/features">Features</NavItem>
            <NavItem href="/about">About Us</NavItem>
            <NavItem href="/products">Products</NavItem>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleSidebar = () => setIsOpen(!isOpen)

  const closeSidebar = () => setIsOpen(false)

  return (
    <>
      <button className="md:hidden fixed top-4 left-4 z-50" onClick={toggleSidebar} aria-label="Toggle sidebar">
        <Menu className="h-6 w-6 text-gray-500" />
      </button>

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
              <Link href="/" className="flex items-center" onClick={closeSidebar}>
                <Webhook className="h-8 w-8 mr-2 text-blue-600" />
                <span className="font-semibold text-gray-800 text-lg">Dummy Store</span>
              </Link>
              <button onClick={closeSidebar} aria-label="Close sidebar">
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            <nav className="p-4">
              <NavItem href="/features" onClick={closeSidebar} className="block">
                Features
              </NavItem>
              <NavItem href="/about" onClick={closeSidebar} className="block">
                About Us
              </NavItem>
              <NavItem href="/products" onClick={closeSidebar} className="block">
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
  )
}

export function Navigation({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Sidebar />
      <main className="flex-grow pt-16 md:pt-0">{children}</main>
    </div>
  )
}

