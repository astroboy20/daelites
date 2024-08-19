"use client";

import React, { useEffect, useState } from "react";
import { TestimonialData } from "./data";
import Image from "next/image";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { QuoteIcon } from "@/assets";

const Testimonial = () => {

  return (
    <div className="relative bg-[#FAFBFF]">
      <div className="absolute bottom-0">
        <Image src={"/images/Frame2.png"} width={900} height={600} alt="frame"/>
      </div>
      <div className="mx-[14%] pt-[5%] pb-[10%]  text-white">
        <div>
          <h1 className="mb-5 relative text-[36px] text-[#107C41] font-[700] text-center after:content-[''] after:w-[85px] after:bg-[#8CC63F] after:m-auto after:mt-2 after:rounded-md after:absolute after:h-[5px] after:left-0 after:right-0 after:top-2/3 after:translate-y-2">
            Testimonials
          </h1>
        </div>
        <span className="absolute left-[75%] top-[10%]">
          <QuoteIcon />
        </span>
        <div className=" bg-[#107C41] p-5 lg:py-[5%] lg:px-[15%] rounded-[10px] h-fit lg:h-[400px]">
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{ delay: 4500 }}
            loop={true}
            className="flex justify-center items-center h-full"
          >
            {TestimonialData.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="text-[16px] lg:text-[20px] flex flex-col gap-6 ">
                  <p>{data.content}</p>
                  <p className="mt-auto text-[#8CC63F]">{data.job}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export { Testimonial };
