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
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="relative bg-[#FAFBFF]">
      <div className="absolute bottom-0">
        <Image
          src={"/images/Frame2.png"}
          width={900}
          height={600}
          alt="frame"
          objectFit="contain"
          className="w-auto h-auto sm:w-auto sm:h-auto lg:w-[900px] lg:h-fit"
        />
      </div>
      <div className="pt-[15%] mx-[15%] sm:mx-[10%] lg:mx-[14%] lg:pt-[10%] pb-[10%] flex flex-col gap-10 text-white ">
        <div>
          <h1 className="mb-5 relative text-[24px] lg:text-[36px] text-[#107C41] font-[700] text-center after:content-[''] after:w-[85px] after:bg-[#8CC63F] after:m-auto after:mt-2 after:rounded-md after:absolute after:h-[5px] after:left-0 after:right-0 after:top-2/3 after:translate-y-2">
            Testimonials
          </h1>
        </div>
        <span className="absolute left-[75%] lg:left-[82%] top-[15%] sm:top-[28%] sm:left-[85%] lg:top-[26%] ">
          <FaQuoteRight size={"130px"} className="w-[65px] sm:w-[75px]" color="#8CC63F" />
        </span>
        <div className=" bg-[#107C41] p-[10%] lg:py-[5%] lg:px-[15%] rounded-[10px] h-fit lg:h-fit">
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
