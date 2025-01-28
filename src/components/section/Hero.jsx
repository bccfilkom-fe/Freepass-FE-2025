import Image from "next/image";
const Hero = () => {
  return (
    <section className="mt-4 hero-img relative text-5xl   p-4 lg:text-[4rem] font-semibold text-white bg-slate-300 w-full h-96 rounded-lg bg-top bg-cover lg:bg-right-top">
      <div className="absolute lg:top-24 top-14">
        <h1 className="">Not Your Average </h1>
        <h1 className="">Online Shop</h1>
      </div>
    </section>
  );
};

export default Hero;
