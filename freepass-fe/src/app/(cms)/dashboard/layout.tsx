import { SidebarCMS } from "@/components/ui/sidebar-cms";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="block md:flex h-screen">
        <div className="block sm:flex ">
          <SidebarCMS />
        </div>
        <div className="flex-1 min-h-screen bg-gray-100">
          <main className="h-full w-full p-6 overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
