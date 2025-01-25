const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchAllCategory() {
  console.log(baseURL);
  try {
    const response = await fetch(`${baseURL}/api/categories`);
    if (!response.ok) {
      throw new Error("Failed to fetch Categories");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
