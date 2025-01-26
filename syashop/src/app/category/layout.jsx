import CategoryNavbar from "@/components/navbar/CategoryNavbar";

export default function RootLayout({ children, params }) {
  return (
    <main className="">
      <div className="bg-accent w-full h-80"></div>
      <section className="md:flex gap-x-5">
        <div className="md:w-1/4">
          <CategoryNavbar />
        </div>
        <div className="md:w-3/4">{children}</div>
      </section>
    </main>
  );
}
