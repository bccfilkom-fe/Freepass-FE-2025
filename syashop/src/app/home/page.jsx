import CategoryList from "@/components/section/CategoryList";
import Hero from "@/components/section/Hero";
import ProductHighlight from "@/components/section/ProductHighlight";
import { fetchProducts } from "@/services/fetchProduct";

const HomePage = async () => {
  const products = await fetchProducts();
  const bestSeller = (products, topN) => {
    products.sort((a, b) => b.rating.rate - a.rating.rate);
    return products.slice(0, topN);
  };
  const topRatedProducts = bestSeller(products, 8);
  return (
    <main className="mt-4">
      <Hero />
      <CategoryList />
      <ProductHighlight product={topRatedProducts} title={"Best seller"} />
      <div className="h-96"></div>
    </main>
  );
};

export default HomePage;
