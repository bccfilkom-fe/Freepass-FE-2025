import { BentoGridSecondDemo } from "./aboutCard";

export function About() {
  return (
    <section
      className="min-h-screen p-12 w-full mx-auto grid items-center relative bg-white"
      id="about"
    >
      <div className="flex items-center justify-center gap-4 flex-col md:flex-row">
        <div
          className="w-full md:w-2/5 h-full self-start shadow-2xl border rounded-lg pt-4"
          data-aos="fade-right"
          data-aos-offset="300"
        >
          <h1 className="font-bold text-4xl px-4">About Us</h1>
          <h2 className="font-semibold mt-4 text-lg px-4">
            Revolutionizing Electronic Commerce
          </h2>
          <p className="mt-2 px-4 pb-8 text-sm md:text-base">
            Welcome to Dummy Store, your ultimate destination for cutting-edge
            electronics and seamless online shopping experiences. Our platform
            is designed to provide a wide range of high-quality electronic
            products, from the latest gadgets to essential tech accessories, all
            in one place.
          </p>
          <span className="block mt-4 h-1 w-full bg-gradient-to-r from-blue-500 to-green-500"></span>
        </div>
        <div>
          <BentoGridSecondDemo />
        </div>
      </div>
      <div className="absolute h-8 w-full bottom-0 bg-gradient-to-t from-neutral-950/30 to-transparent"></div>
    </section>
  );
}
