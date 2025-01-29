import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tv from "../../../public/Tv.png";

const ElectronicAds = () => {
  return (
    <div className=" w-full px-10 h-60  rounded-xl flex flex-row-reverse items-center">
      <Image className="aspect-square w-2/5 md:w-1/3 h-fit" src={Tv} alt="Tv" />
      <div className=" flex flex-col gap-2 md:gap-4">
        <h5>Timeless Innovation</h5>
        <h2 className="md:text-4xl text-xl font-bold">
          Discover Our Electronics collection
        </h2>
        <Link
          className="md:px-4 md:py-2 px-2 py-1 bg-primary  w-fit rounded-lg text-white"
          href={"/products/category/electronics"}
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default ElectronicAds;
