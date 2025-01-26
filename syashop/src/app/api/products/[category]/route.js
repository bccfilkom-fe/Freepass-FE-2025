export async function GET(req, { params }) {
  const { category } = await params;

  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch category");
    }
    const data = await response.json();
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
