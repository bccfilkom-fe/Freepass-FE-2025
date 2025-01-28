import React from "react";
import PersonBox from "../../../public/PersonBox.png";
import Image from "next/image";
const Ads = () => {
  return (
    <div className="bg-primary h-[25rem] text-white font-bold text-3xl  w-full lg:h-[30rem] aspect-auto rounded-xl relative overflow-hidden">
      <Image
        className="absolute  bottom-0 left-20 "
        src={PersonBox}
        alt="Person Megang Box"
      />
      <h1 className="absolute top-4 left-4 ">syashop</h1>
      <div className="absolute top-28 left-4 w-1/2">
        <p className="">Your Style, Delivered.</p>
        <p>Exclusively Online.</p>
      </div>
      <h1 className="text-sm font-light absolute bottom-4 left-4">
        www.syashop.vercel.app
      </h1>
    </div>
  );
};

export default Ads;
