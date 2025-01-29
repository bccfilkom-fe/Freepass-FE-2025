"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DeleteConfirmationModal } from "@/components/ui/deleteModal";
import useDelete from "@/hooks/useDelete";
import useEdit from "@/hooks/usePut";
import { getProductData } from "@/utils/getProductData";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string | File | null;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);

  const { deleteItem } = useDelete({
    onSuccess: () => {
      if (productToDelete) {
        setProducts(
          products.filter((product) => product.id !== productToDelete.id)
        );
      }
      setIsDeleteModalOpen(false);
      setProductToDelete(null);
    },
  });

  useEdit({
    onSuccess: (updatedProduct) => {
      setProducts(
        products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
    },
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { dataProducts } = await getProductData();
      if (dataProducts) {
        setProducts(dataProducts);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDeleteClick = (product: Product) => {
    setProductToDelete(product);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (productToDelete) {
      await deleteItem(productToDelete.id, productToDelete.name);
    }
  };

  const getImageUrl = (imageName: string) => {
    return `${process.env.NEXT_PUBLIC_API_URL}/images/${imageName}`;
  };

  return (
    <section className="space-y-4 sm:space-y-6 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <h1 className="text-2xl sm:text-3xl font-bold">Products</h1>
        <Button asChild className="w-full sm:w-auto">
          <Link href="/dashboard/product/new">Add New Product</Link>
        </Button>
      </div>
      <div className="overflow-x-auto -mx-4 sm:-mx-6">
        <div className="inline-block min-w-full align-middle px-4 sm:px-6">
          <div className="overflow-hidden border border-gray-200 sm:rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px] sm:w-[120px]">Image</TableHead>
                  <TableHead className="min-w-[120px]">Name</TableHead>
                  <TableHead className="min-w-[100px]">Price</TableHead>
                  <TableHead className="hidden sm:table-cell min-w-[200px]">
                    Description
                  </TableHead>
                  <TableHead className="w-[100px] text-right">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.isArray(products) && products.length > 0 ? (
                  products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        {product.image === "null" ? (
                          <div className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] bg-gray-200 rounded-lg flex items-center justify-center"></div>
                        ) : (
                          <Image
                            src={
                              typeof product.image === "string"
                                ? getImageUrl(product.image)
                                : ""
                            }
                            alt={product.name}
                            width={120}
                            height={120}
                            priority
                            className="object-contain object-center rounded-lg bg-white w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]"
                          />
                        )}
                      </TableCell>
                      <TableCell className="font-medium">
                        <div className="max-w-[120px] sm:max-w-[200px] truncate">
                          {product.name}
                        </div>
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }).format(product.price)}
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <div className="max-w-[200px] truncate">
                          {product.description}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button size="icon" asChild className="bg-blue-600">
                            <Link
                              href={`/dashboard/product/${product.id}/edit`}
                            >
                              <Pencil className="h-4 w-4 text-white" />
                            </Link>
                          </Button>
                          <Button
                            size="icon"
                            className="bg-red-600"
                            onClick={() => handleDeleteClick(product)}
                          >
                            <Trash2 className="h-4 w-4 text-white" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center">
                      No products available
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        productName={productToDelete?.name || ""}
      />
    </section>
  );
}
