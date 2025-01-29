"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import flash from "@/public/assets/img/360_F_464174184_97K3DMZNZ6O0upYRgSyFlojds4UqipYt.jpg";
import cod from "@/public/assets/img/shutterstock-769525906-e1565927344536.png";
import retu from "@/public/assets/img/AdobeStock_398103680-1200x667.webp";
import pay from "@/public/assets/img/v0WQ11nHomwApEwRyV7q5W7aLeiYqeGER9uaYcVS.webp";

const content = [
  {
    title: "Flash Deals",
    description:
      "Get the best deals with our daily Flash Sales! Enjoy massive discounts on selected electronic products for a limited time. Stay updated and grab your favorite gadgets before the deals expire!",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={flash}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Cash on Delivery (COD)",
    description:
      "Shop with confidence using our Cash on Delivery (COD) option. No need to worry about online payments—simply place your order and pay when it arrives at your doorstep. A hassle-free shopping experience just for you!",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={cod}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Easy Returns & Refunds",
    description:
      "Your satisfaction is our priority! If you're not happy with your purchase, you can easily return the item and get a refund or replacement. Our seamless return policy ensures a stress-free shopping experience.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={retu}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Secure Payment Methods",
    description:
      "We provide multiple secure payment options, including credit/debit cards, e-wallets, and online banking. With advanced encryption and fraud protection, your transactions are always safe and smooth.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={pay}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function Feature() {
  return (
    <section className="h-max">
      <StickyScroll content={content} />
    </section>
  );
}
