import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string | File | null;
}

interface UseEditOptions {
  onSuccess?: (updatedProduct: Product) => void;
  onError?: (error: unknown) => void;
}

const useEdit = (options: UseEditOptions = {}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const editProduct = async (id: string, updatedData: FormData) => {
    setIsEditing(true);
    setError(null);

    try {
      const response = await axios.put(`/api/product/put/${id}`, updatedData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200 && response.data.status === "success") {
        const updatedProduct: Product = {
          id: id,
          name: updatedData.get("name") as string,
          price: parseFloat(updatedData.get("price") as string),
          description: updatedData.get("description") as string,
          image: updatedData.get("image") as File | null,
        };
        toast.success(`Product "${updatedProduct.name}" updated successfully`);
        options.onSuccess?.(updatedProduct);
        return updatedProduct;
      } else {
        throw new Error("Failed to update product");
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
      toast.error(`Failed to update product`);
      options.onError?.(err);
    } finally {
      setIsEditing(false);
    }
  };

  return { editProduct, isEditing, error };
};

export default useEdit;
