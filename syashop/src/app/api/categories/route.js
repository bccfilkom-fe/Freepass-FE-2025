export async function GET(req) {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
