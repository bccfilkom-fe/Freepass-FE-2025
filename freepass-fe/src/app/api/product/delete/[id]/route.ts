import { type NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/product/delete/${id}`
    );

    if (response.status === 200) {
      return NextResponse.json(
        { status: "success", message: "Product deleted successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { status: "error", message: "Failed to delete product" },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { status: "error", message: "Internal server error" },
      { status: 500 }
    );
  }
}
