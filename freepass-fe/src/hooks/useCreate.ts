import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import axios from "axios";

interface CreateProductData {
  name: string;
  price: string;
  description: string;
  image?: File;
}

export function useCreate() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const createProduct = async (data: CreateProductData) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("description", data.description);
      if (data.image) {
        formData.append("image", data.image);
      }

      const res = await axios.post("/api/product/create", formData);

      if (res.status === 200) {
        toast.success(`${data.name} created successfully`);
        setTimeout(() => {
          router.push("/dashboard/product");
        }, 2000);
      } else {
        toast.error(`Failed to add product`);
      }
    } catch (error) {
      console.error("Product creation error", error);
      toast.error("Failed to create the product. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { createProduct, isSubmitting };
}
