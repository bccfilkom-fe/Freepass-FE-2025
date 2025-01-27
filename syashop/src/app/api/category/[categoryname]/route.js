export async function GET(req, { params }) {
  const { categoryname } = params;
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${categoryname}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch category");
    }
    const data = await response.json();

    if (data.length === 0) {
      throw new Error("No products found in this category");
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
