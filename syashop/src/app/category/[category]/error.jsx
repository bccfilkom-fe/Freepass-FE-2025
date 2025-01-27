"use client";
import Image from "next/image";
import EmptyBox from "../../../../public/EmptyBox.png";
import Link from "next/link";
const error = () => {
  return (
    <div className="w-full h-96 flex items-center flex-col justify-center">
      <Image className="w-[20rem]" src={EmptyBox} />
      <h1>
        Unfortunately, this category is not available. Please explore our
        availabe Category.
      </h1>
    </div>
  );
};

export default error;
