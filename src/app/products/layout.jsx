"use client";

import CategoryNavbar from "@/components/navbar/CategoryNavbar";
import { usePathname } from "next/navigation";
export default function RootLayout({ children, params }) {
  const pathname = usePathname();
  return (
    <main className="">
      <section className="md:flex gap-x-5">
        {!pathname.startsWith("/products/detail") && (
          <div className="md:w-1/4">
            <CategoryNavbar />
          </div>
        )}
        <div
          className={
            !pathname.startsWith("/products/detail") ? "md:w-3/4" : "w-full"
          }
        >
          {children}
        </div>
      </section>
    </main>
  );
}
