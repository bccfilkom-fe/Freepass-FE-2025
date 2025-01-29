"use client";
import Image from "next/image";
import Mercusuar from "@/assets/img/Mercusuar.png";
import Link from "next/link";

const notFound = () => {
  return (
    <section className="w-full flex justify-center flex-col items-center ">
      <Image alt="mercusuar bang ini" className="w-96" src={Mercusuar} />
      <h1 className="-mt-10">
        I think you've lost, The Page You Are Looking For Does Not Exist
      </h1>
      <Link
        className="bg-primary px-4 py-1 mt-4 rounded-lg text-white"
        href={"/home"}
      >
        Back To Home
      </Link>
    </section>
  );
};

export default notFound;
