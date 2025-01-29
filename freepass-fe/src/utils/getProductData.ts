import axios from "axios";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export async function getProductData() {
  try {
    const response = await axios.get("/api/product/items");

    const dataProducts: Product[] = response.data.payload.data;
    const totalProducts = dataProducts.length;

    const totalRevenue = dataProducts.reduce(
      (sum: number, product: Product) => sum + product.price,
      0
    );

    return {
      dataProducts,
      totalProducts,
      totalRevenue,
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      dataProducts: [],
      totalProducts: 14,
      totalRevenue: 0,
    };
  }
}
