import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import cs from "@/public/assets/img/BlueLinx-home-service-1024x461.jpg";
import fast from "@/public/assets/img/international-courier-service-with-fast-delivery.png";
import disc from "@/public/assets/img/Discount-Pricing-Strategy.png";
import quality from "@/public/assets/img/Product-Quality.jpg";
import {
  IconRosetteDiscountCheck,
  IconTag,
  IconBoltFilled,
  IconHeadset,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "High-Quality & Latest Products",
    description:
      "We offer a wide range of the latest electronic products with guaranteed quality from trusted brands.",
    header: (
      <div className="relative w-full h-full overflow-hidden rounded-xl">
        <Image
          src={quality || "/placeholder.svg"}
          alt="High-Quality Products"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
    ),
    className: "md:col-span-2",
    icon: <IconRosetteDiscountCheck className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "Competitive Prices & Exclusive Deals",
    description:
      "Enjoy the best prices with exclusive offers and exciting discounts every day.",
    header: (
      <div className="relative w-full h-full overflow-hidden rounded-xl">
        <Image
          src={disc || "/placeholder.svg"}
          alt="Competitive Prices"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconTag className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "Fast & Secure Shipping",
    description:
      "We partner with top logistics providers to ensure your orders arrive quickly and in perfect condition.",
    header: (
      <div className="relative w-full h-full overflow-hidden rounded-xl">
        <Image
          src={fast || "/placeholder.svg"}
          alt="Fast Shipping"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconBoltFilled className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "Responsive Customer Support",
    description:
      "Our support team is available 24/7 to provide a smooth and worry-free shopping experience.",
    header: (
      <div className="relative w-full h-full overflow-hidden rounded-xl">
        <Image
          src={cs || "/placeholder.svg"}
          alt="Customer Support"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
    ),
    className: "md:col-span-2",
    icon: <IconHeadset className="h-6 w-6 text-neutral-500" />,
  },
];
