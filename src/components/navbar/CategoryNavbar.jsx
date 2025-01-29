"use client";

import { Shirt, ShirtIcon, Tv, Watch } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const CategoryList = [
  {
    name: "Jewelery",
    link: "jewelery",
    icon: <Watch />,
  },
  {
    name: "Electronics",
    link: "electronics",
    icon: <Tv />,
  },
  {
    name: "Men's Clothing",
    link: "men's%20clothing",
    icon: <Shirt />,
  },
  {
    name: "Women's Clothing",
    link: "women's%20clothing",
    icon: <ShirtIcon />,
  },
];
const CategoryNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full h-12 mt-4 ">
      <h4 className="mb-2 text-2xl font-bold">Category</h4>
      <ul className=" w-full grid grid-cols-2 md:grid-cols-1 justify-between  md:flex-col gap-2">
        {CategoryList.map((item, index) => (
          <li
            key={index}
            className={
              pathname === `/products/${item.link}`
                ? "w-full border-2 py-1 bg-slate-200  shadow-md flex gap-4 items-center justify-center"
                : "border-2 hover-animation font-semibold text-sm items-center rounded-lg shadow-sm px-2 py-2 flex gap-2"
            }
          >
            <span className="w-1/3 flex justify-end">{item.icon}</span>
            <Link className="w-2/3" href={`/products/${item.link}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryNavbar;
