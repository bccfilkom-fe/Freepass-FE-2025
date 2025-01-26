import { Diamond, Shirt, ShirtIcon, Tv, Watch } from "lucide-react";
import Link from "next/link";

const CategoryList = async () => {
  return (
    <section className="mt-10 lg:flex justify-between lg:h-24 items-center">
      <div className="h-full">
        <h4 className="font-bold text-2xl">Shop by Category</h4>
      </div>
      <ul className="grid h-full mt-4 lg:mt-0 grid-cols-2 gap-x-4 lg:gap-x-10 gap-y-4">
        <li>
          <Link
            className="border-2 hover-animation font-semibold text-sm items-center rounded-lg shadow-sm px-2 py-2 flex gap-2"
            href="electronics"
          >
            <Tv className="text-primary" />
            <span>Electronics</span>
          </Link>
        </li>
        <li>
          <Link
            className="border-2 hover-animation font-semibold text-sm items-center rounded-lg shadow-sm px-2 py-2 flex gap-2"
            href="jewelery"
          >
            <Watch className="text-primary" />
            <span>Jewelery</span>
          </Link>
        </li>
        <li>
          <Link
            className="border-2  hover-animation font-semibold text-sm items-center rounded-lg shadow-sm px-2 py-2 flex gap-2"
            href="mens-clothing"
          >
            <Shirt className="text-primary" />
            <span>Mens's Clothing</span>
          </Link>
        </li>
        <li>
          <Link
            className="border-2 hover-animation font-semibold text-sm items-center rounded-lg shadow-sm px-2 py-2 flex gap-2"
            href="women-clothing"
          >
            <Shirt className="text-primary" />
            <span>women-clothing</span>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default CategoryList;
