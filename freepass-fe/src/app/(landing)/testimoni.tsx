"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <section className="h-[40rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
      <div className="px-8 mb-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with thousands of features
        </h4>
        <span className="block mt-2 h-1 w-full bg-gradient-to-r from-blue-500 to-green-500" />
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Dummy Store offers the best selection of electronics at unbeatable prices. Fast shipping and great customer service make it my go-to online store!",
    name: "Michael Johnson",
    title: "Tech Enthusiast",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "I was amazed by the quality of the products and the seamless shopping experience. The Flash Deals are a game-changer—I saved a lot on my latest gadget purchase!",
    name: "Sophia Carter",
    title: "Frequent Shopper",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "The Cash on Delivery option gives me peace of mind when shopping online. Plus, their return policy is hassle-free. Highly recommended!",
    name: "Daniel Thompson",
    title: "Satisfied Customer",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    quote:
      "I travel a lot, and Dummy Store's global accessibility makes it easy for me to order from anywhere. Their secure payment methods are a big plus!",
    name: "Emily White",
    title: "Digital Nomad",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    quote:
      "Excellent customer support! They responded quickly and helped me track my order in no time. Shopping here is always a pleasure.",
    name: "James Wilson",
    title: "Happy Customer",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
  },
];
