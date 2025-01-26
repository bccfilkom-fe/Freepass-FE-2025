import Card from "@/components/ui/Card";
import { fetchProductByCategory, fetchProducts } from "@/services/fetchProduct";
import Link from "next/link";

const ProductPage = async () => {
  const products = await fetchProducts();
  return (
    <main className="mt-6 font-semibold">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
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

export default ProductPage;
