import { About } from "./(landing)/about";
import { Connectivity } from "./(landing)/connectivity";
import { Feature } from "./(landing)/feature";
import Footer from "./(landing)/footer";
import Hero from "./(landing)/hero";
import { LogSection } from "./(landing)/log";
import { Products } from "./(landing)/product";
import { Testimonials } from "./(landing)/testimoni";
import { Navbar } from "@/components/ui/navbar";
import { SidebarUser } from "@/components/ui/sidebar-user";

export default function Home() {
  return (
    <>
      <Navbar />
      <SidebarUser />
      <Hero />
      <LogSection />
      <About />
      <Feature />
      <Connectivity />
      <Products />
      <Testimonials />
      <Footer />
    </>
  );
}
