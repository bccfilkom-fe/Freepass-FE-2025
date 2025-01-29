import { type NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const formData = await request.formData();

    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/product/put/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.status === 200 && response.data.status === "success") {
      return NextResponse.json(
        { status: "success", data: response.data },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { status: "error", message: "Failed to update product" },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { status: "error", message: "Internal server error" },
      { status: 500 }
    );
  }
}
