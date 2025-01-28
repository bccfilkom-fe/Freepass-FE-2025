import DetailProduct from "@/components/section/DetailProduct";
import ProductHighlight from "@/components/section/ProductHighlight";
import {
  fetchProductByCategory,
  fetchProductById,
} from "@/services/fetchProduct";

const page = async ({ params }) => {
  const { id } = await params;
  const detailProduct = await fetchProductById(id);
  let youMayLikeProduct = await fetchProductByCategory(detailProduct.category);
  youMayLikeProduct = youMayLikeProduct.slice(0, 4);
  return (
    <main>
      <section>
        <DetailProduct product={detailProduct} />
      </section>
      <section>
        <ProductHighlight
          title="You May Like This"
          product={youMayLikeProduct}
          category={detailProduct.category}
        />
      </section>
    </main>
  );
};

export default page;
