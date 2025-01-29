import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

interface UseDeleteOptions {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

const useDelete = (options: UseDeleteOptions = {}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const deleteItem = async (id: string, itemName: string) => {
    setIsDeleting(true);
    setError(null);

    try {
      const response = await axios.delete(`/api/product/delete/${id}`);

      if (response.status === 200) {
        toast.success(`${itemName} deleted successfully`);
        options.onSuccess?.();
      } else {
        throw new Error("Failed to delete item");
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
      toast.error(`Failed to delete ${itemName}`);
      options.onError?.(
        err instanceof Error ? err.message : "An error occurred"
      );
    } finally {
      setIsDeleting(false);
    }
  };

  return { deleteItem, isDeleting, error };
};

export default useDelete;
