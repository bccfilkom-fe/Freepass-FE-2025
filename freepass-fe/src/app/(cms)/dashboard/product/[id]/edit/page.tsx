"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProductData } from "@/utils/getProductData";
import useEdit from "@/hooks/usePut";
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string | File | null;
}

export default function EditProduct({ params }: { params: { id: string } }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const { editProduct, isEditing, error } = useEdit({
    onSuccess: (updatedProduct) => {
      setMessage(`Product "${updatedProduct.name}" successfully updated!`);
      setTimeout(() => {
        router.push("/dashboard/product");
      }, 2000);
    },
    onError: (error) => {
      setMessage("Failed to update product. Please try again.");
      console.error("Error updating product:", error);
    },
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { dataProducts } = await getProductData();
        if (dataProducts) {
          const product = dataProducts.find((p: any) => p.id === params.id);
          if (product) {
            setName(product.name);
            setPrice(product.price.toString());
            setDescription(product.description);
            setImage(null);
          } else {
            setMessage("Product not found.");
          }
        } else {
          setMessage("Failed to fetch product details.");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedProduct = new FormData();
    updatedProduct.append("name", name);
    updatedProduct.append("price", price);
    updatedProduct.append("description", description);
    if (image) {
      updatedProduct.append("image", image);
    }

    await editProduct(params.id, updatedProduct);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Edit Product</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Image</Label>
              <Input
                type="file"
                accept="image/*"
                id="image"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setImage(file);
                  }
                }}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isEditing}>
              {isEditing ? "Updating..." : "Update Product"}
            </Button>
          </form>
          {message && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
              {message}
            </div>
          )}
          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error.message}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
