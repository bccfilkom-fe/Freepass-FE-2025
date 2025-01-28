import React from "react";
import Watch from "../../../public/Watch.png";
import Image from "next/image";
import Link from "next/link";
const JeweleryAds = () => {
  return (
    <div className=" w-full h-62 rounded-xl flex items-center">
      <Image
        className="aspect-square w-2/5 md:w-1/3 h-fit"
        src={Watch}
        alt=""
      />
      <div className=" flex flex-col gap-2 md:gap-4">
        <h5>Enduring Sophistication</h5>
        <h2 className="md:text-4xl text-xl font-bold">
          Discover Our Jewelery collection
        </h2>
        <Link
          className="md:px-4 md:py-2 px-2 py-1 bg-primary  w-fit rounded-lg text-white"
          href={"/category/jewelery"}
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default JeweleryAds;
