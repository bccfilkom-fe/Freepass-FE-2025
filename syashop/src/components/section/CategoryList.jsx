import { Diamond, Shirt, ShirtIcon, Tv, Watch } from "lucide-react";
import Link from "next/link";
const CategoryItem = [
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
const CategoryList = async () => {
  return (
    <section className="mt-10 lg:flex justify-between lg:h-24 items-center">
      <div className="h-full">
        <h4 className="font-bold text-2xl">Shop by Category</h4>
      </div>
      <ul className="grid h-full mt-4 lg:mt-0 grid-cols-2 gap-x-4 lg:gap-x-10 gap-y-4">
        {CategoryItem.map((item, index) => (
          <li key={index}>
            <Link
              className="border-2 hover-animation font-semibold text-sm items-center rounded-lg shadow-sm px-2 py-2 flex gap-2"
              href={`category/${item.link}`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategoryList;
