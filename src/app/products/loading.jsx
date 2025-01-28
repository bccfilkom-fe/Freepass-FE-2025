import CardSkeleton from "@/components/loading/CardSkeleton";
import React from "react";

const loading = () => {
  return (
    <section className=" font-semibold md:mt-6 mt-28 w-full">
      <div className="md:flex md:mb-1 mb-4 justify-between text-sm font-light">
        <h4 className="font-bold text-xl">Products </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </section>
  );
};

export default loading;
