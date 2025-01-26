const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchProducts() {
  try {
    const response = await fetch(`${baseURL}/api/products`);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
    console.log(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function fetchProductById(id) {
  try {
    const response = await fetch(`${baseURL}/api/products/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch product with ID ${id}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
