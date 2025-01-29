"use client";
import { cn } from "@/lib/utils";
import {
  IconTruck,
  IconDiscountCheck,
  IconWallet,
  IconShieldCheck,
  IconShoppingCart,
  IconGlobe,
  IconHeadset,
  IconCheck,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type React from "react"; // Added import for React

export function LogSection() {
  const features = [
    {
      title: "Exclusive Flash Deals",
      description:
        "Enjoy massive discounts on top electronic products with our limited-time Flash Sales.",
      icon: <IconDiscountCheck />,
    },
    {
      title: "Flexible Payment Options",
      description:
        "Choose from various secure payment methods, including COD, credit cards, and digital wallets.",
      icon: <IconWallet />,
    },
    {
      title: "Fast & Reliable Shipping",
      description:
        "We ensure quick deliveries with trusted logistics partners worldwide.",
      icon: <IconTruck />,
    },
    {
      title: "Secure Transactions",
      description:
        "Your data and payments are always protected with advanced encryption and fraud prevention.",
      icon: <IconShieldCheck />,
    },
    {
      title: "Wide Product Selection",
      description:
        "Find the latest electronics, from smartphones to smart home devices, all in one place.",
      icon: <IconShoppingCart />,
    },
    {
      title: "Global Accessibility",
      description:
        "Shop from anywhere! We are connected across multiple countries to serve you better.",
      icon: <IconGlobe />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "Our dedicated support team is available around the clock to assist you anytime.",
      icon: <IconHeadset />,
    },
    {
      title: "Satisfaction Guaranteed",
      description:
        "Not happy with your purchase? We offer easy returns and hassle-free refunds.",
      icon: <IconCheck />,
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0 });

  return (
    <section
      id="log"
      className="bg-white pt-12 rounded-t-[50px] w-full shadow-2xl px-8"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
            The Best Shopping Experience for Electronics
          </h4>
          <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
            From the latest gadgets to essential electronics, Dummy Store brings
            you a seamless and secure shopping experience with unbeatable
            prices.
          </p>
        </motion.div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <motion.div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <motion.div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400"
      >
        {icon}
      </motion.div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-cente" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </motion.div>
  );
};
