"use client";
import Image from "next/image";
import EmptyBox from "../../../../public/EmptyBox.png";
import Link from "next/link";
const error = ({ error }) => {
  return (
    <div className="w-full h-96 flex items-center flex-col justify-center">
      <Image alt="ini empty box bang" className="w-[20rem]" src={EmptyBox} />
      <h1 className="text-center">
        Unfortunately, this product is not available. Please explore our other
        offerings.
      </h1>
      <Link
        className="bg-primary hover:scale-110 transition-all text-white px-4 py-1 rounded-lg mt-2"
        href={"/home"}
      >
        Explore
      </Link>
    </div>
  );
};

export default error;
