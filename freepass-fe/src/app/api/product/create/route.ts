import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/product/create`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.status === 200) {
      return NextResponse.json(
        { message: "Product created successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Failed to create product" },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
