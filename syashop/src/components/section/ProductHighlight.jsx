"use client";

import "swiper/css";
import "swiper/css/pagination";
import Card from "../ui/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Pagination } from "swiper/modules";

const ProductHighlight = ({ product, title, category }) => {
  return (
    <section className="mt-10 text-2xl font-bold">
      <div className="flex justify-between items-center">
        <h2 className="">{title}</h2>
        {category && (
          <Link href={`/category/${category}`} className="font-light text-lg">
            See More
          </Link>
        )}
      </div>
      <section className="w-full h-[33rem] 2xl:h-[32rem] lg:h-[28rem]">
        <Swiper
          spaceBetween={50}
          loop={true}
          pagination={true}
          slidesPerView={4}
          modules={[Pagination]}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper0 h-full "
        >
          {product.map((product) => (
            <SwiperSlide key={product.id} className="pt-10">
              <Link href={`/products/detail/${product.id}`}>
                <Card
                  title={product.title}
                  img={product.image}
                  category={product.category}
                  price={product.price}
                  count={product.rating.count}
                  rating={product.rating.rate}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default ProductHighlight;
