export async function fetchProducts() {
  try {
    const response = await fetch(`${BASE_URL}/api/products`);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function fetchProductById(id) {
  try {
    const response = await fetch(`${BASE_URL}/api/products/${id}`);
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
