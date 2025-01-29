import Card from "@/components/ui/Card";
import { fetchProductByCategory } from "@/services/fetchProduct";
import { Cross } from "lucide-react";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

const CategoryPage = async ({ params }) => {
  const { category } = await params;
  const products = await fetchProductByCategory(category);
  if (products.length === 0) {
    throw new Error("No products found");
  }
  console.log(products);
  return (
    <main className=" font-semibold md:mt-6 mt-28 w-full">
      <div className="md:flex md:mb-1 mb-4 justify-between text-sm font-light">
        <h4 className="font-bold text-xl">Products &gt; {category}</h4>
        <Link className="flex gap-1 items-center" href={"/products"}>
          <Cross className="rotate-45 text-red-500 w-4 h-4" />
          Reset category
        </Link>
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
    </main>
  );
};

export default CategoryPage;
