import { Heart, Send } from "lucide-react";
import StarRating from "../ui/StarRating";
import AddToCartBtn from "../ui/AddToCartBtn";

const DetailProduct = ({ product }) => {
  return (
    <section className="">
      <div className="font-bold text-sm lg:text-sm xl:text-lg mb-5 flex gap-x-2">
        <span className="text-primary ">Products </span>
        <span>&gt;</span>
        <h1 className="truncate">{product.title}</h1>
      </div>
      <section className="flex flex-col lg:flex-row lg:gap-x-24">
        <div className="flex justify-center border-primary border-4 aspect-square h-fit rounded-2xl  w-full lg:w-[50%]">
          <img src={product.image} className="p-10" />
        </div>
        <div className="lg:w-full ">
          <div className="flex justify-between items-center lg:my-1 my-4">
            <h4 className="px-2 text-s lg:text-xs xl:text-lg  bg-primary rounded-md h-fit w-fit py-2 text-white font-semibold">
              {product.category}
            </h4>
            <span className="flex gap-4">
              <Send className="rotate-45 text-primary" />
              <Heart className="bg-slate-50" />
            </span>
          </div>
          <span className="text-2xl lg:text-lg xl:text-2xl font-bold">
            {product.title}
          </span>
          <div className="flex justify-between lg:flex-col ">
            <div>
              <span className="flex  gap-2 my-2 items-center font-semibold ">
                <StarRating rating={product.rating.rate} />
                <span className="text-sm xl:text-lg">
                  {product.rating.rate}
                </span>
                <span className="text-sm xl:text-lg font-light">
                  {product.rating.count}
                </span>
              </span>
              <span className=" font-normal">
                {product.rating.count} items sold
              </span>
            </div>
            <span className="text-xl font-bold xl:text-3xl xl:mt-2">
              $ {product.price}
            </span>
          </div>
          <AddToCartBtn product={product} />
        </div>
      </section>
      <section className="mt-10 ">
        <h1 className="font-bold text-lg ; text-primary">Description</h1>
        <p className="font-light text-justify ">{product.description}</p>
      </section>
    </section>
  );
};

export default DetailProduct;
