"use client";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { images } from "@/lib/images";

export default function Carousel() {
  return (
    <section className="max-w-full overflow-x-hidden">
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full mySwiper bg-black"
      >
        <SwiperSlide>
          <div className="flex h-full w-full items-center justify-center">
            {" "}
            <Image
              src={images.src_1}
              alt={images.alt_1}
              className="h-full w-1/2 block object-cover"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full w-full items-center justify-center">
            <Image
              src={images.src_1}
              alt={images.alt_1}
              className="h-full w-1/2 block object-cover"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full w-full items-center justify-center">
            <Image
              src={images.src_1}
              alt={images.alt_1}
              className="h-full w-1/2 block object-cover"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full w-full items-center justify-center">
            <Image
              src={images.src_1}
              alt={images.alt_1}
              className="h-full w-1/2 block object-cover"
              priority
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
