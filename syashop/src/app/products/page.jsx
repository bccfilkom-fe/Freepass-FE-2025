import Card from "@/components/ui/Card";
import { fetchProducts } from "@/services/fetchProduct";
import Link from "next/link";
import React from "react";

const page = async () => {
  const products = await fetchProducts();
  return (
    <section className=" font-semibold md:mt-6 mt-28 w-full">
      <div className="md:flex md:mb-1 mb-4 justify-between text-sm font-light">
        <h4 className="font-bold text-xl">Products </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link href={`/products/detail/${product.id}`} key={product.id}>
            <Card
              category={product.category}
              count={product.rating.count}
              img={product.image}
              price={product.price}
              rating={product.rating.rate}
              title={product.title}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default page;
