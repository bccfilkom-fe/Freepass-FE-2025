"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ShoppingCart, Banknote } from "lucide-react";
import { getProductData } from "@/utils/getProductData";
import RefreshButton from "@/components/ui/refresh-button";

export default function Dashboard() {
  const [total, setTotal] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { totalProducts, totalRevenue } = await getProductData();
      if (totalProducts && totalRevenue) {
        setTotal(totalProducts);
        setRevenue(totalRevenue);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <section className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-start sm:items-center gap-4 sm:gap-0">
        <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
        <RefreshButton />
      </div>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm sm:text-base font-medium">
              Total Products
            </CardTitle>
            <Package className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-lg lg:text-2xl font-bold">
              {total}
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm sm:text-base font-medium">
              Total Revenue
            </CardTitle>
            <Banknote className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-lg lg:text-2xl font-bold">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(revenue)}
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm sm:text-base font-medium">
              Total Orders
            </CardTitle>
            <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-lg lg:text-2xl font-bold">
              {new Intl.NumberFormat("id-ID").format(1054)}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
