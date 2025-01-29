import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import Link from "next/link";

interface EditProductProps {
  productId: string;
}

export function EditProductForm({ productId }: EditProductProps) {
  return (
    <Button size="icon" asChild className="bg-blue-600">
      <Link href={`/dashboard/product/${productId}/edit`}>
        <Pencil className="h-4 w-4 text-white" />
      </Link>
    </Button>
  );
}
