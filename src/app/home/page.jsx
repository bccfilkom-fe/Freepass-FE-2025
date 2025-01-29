import CategoryNavbar from "@/components/navbar/CategoryNavbar";
import Ads from "@/components/section/Ads";
import CategoryList from "@/components/section/CategoryList";
import ElectronicAds from "@/components/section/ElectronicAds";
import Hero from "@/components/section/Hero";
import JeweleryAds from "@/components/section/JeweleryAds";
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
      <CategoryNavbar />
      <ProductHighlight product={topRatedProducts} title={"Best seller"} />
      <section className="md:flex mt-16 gap-10 ">
        <div className="md:w-1/3 w-full">
          <Ads />
        </div>
        <div className="md:w-2/3 mt-10 md:mt-">
          <JeweleryAds />
          <ElectronicAds />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
