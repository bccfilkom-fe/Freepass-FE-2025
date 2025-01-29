"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type Position = {
  x: string;
  y: string;
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const text = "DummyStore";

  const getInitialPosition = (char: string): Position => {
    switch (char) {
      case "d":
        return { x: "100vw", y: "100vh" };
      case "u":
        return { x: "-100vw", y: "-100vh" };
      case "y":
        return { x: "100vw", y: "-100vh" };
      case "t":
        return { x: "-100vw", y: "100vh" };
      default:
        const edge = Math.floor(Math.random() * 4);
        switch (edge) {
          case 0:
            return { x: "-100vw", y: `${Math.random() * 100}vh` };
          case 1:
            return { x: "100vw", y: `${Math.random() * 100}vh` };
          case 2:
            return { x: `${Math.random() * 100}vw`, y: "-100vh" };
          default:
            return { x: `${Math.random() * 100}vw`, y: "100vh" };
        }
    }
  };

  return (
    <section className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center sticky top-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20"></div>
      <span className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></span>

      <motion.div
        className="relative z-10 max-w-4xl text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
          {mounted &&
            text.split("").map((char, index) => {
              const { x, y } = getInitialPosition(char);
              return (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    x,
                    y,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  transition={{
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                    duration: 1,
                    delay: index * 0.1,
                  }}
                  className={`inline-block ${
                    index >= 5 ? "text-blue-500" : ""
                  }`}
                >
                  {char}
                </motion.span>
              );
            })}
        </h1>
        <motion.p
          className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 3.8 }}
        >
          Discover the latest gadgets, unbeatable deals, and a seamless shopping
          experience—all in one place. Shop smart, shop with Dummy Store.
        </motion.p>
      </motion.div>
    </section>
  );
}
