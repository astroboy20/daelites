"use client";

import React, { useEffect, useState } from "react";
import { TestimonialData } from "./data";
import Image from "next/image";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const Testimonial = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(
    0
  );
  const [ratings, setRatings] = useState<number[]>([]);

  // Initialize ratings with random values between 3 and 5
  useEffect(() => {
    const initialRatings = TestimonialData.map(
      () => Math.floor(Math.random() * 3) + 3
    );
    setRatings(initialRatings);
  }, []);

  const toggleExpansion = (index: number) => {
    setSelectedTestimonial((prevIndex) => (prevIndex === index ? null : index));
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, index) =>
          index < rating ? (
            <IoIosStar key={index} className="text-[#8CC63F] " size={"30px"} />
          ) : (
            <IoIosStarOutline
              key={index}
              className="text-[#8CC63F] "
              size={"30px"}
            />
          )
        )}
      </div>
    );
  };

  return (
    <div className="mx-[14%] pt-[5%] pb-[10%]">
      <div>
        <h1 className="mb-5 relative text-[36px] text-[#107C41] font-[700] text-center after:content-[''] after:w-[85px] after:bg-[#8CC63F] after:m-auto after:mt-2 after:rounded-md after:absolute after:h-[5px] after:left-0 after:right-0 after:top-2/3 after:translate-y-2">
          Testimonials
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          {TestimonialData.map((data, index) => (
            <div key={data.id} className="flex flex-col">
              <div
                className={`p-4 cursor-pointer ${
                  selectedTestimonial === index
                    ? "bg-[#FAFBFF] rounded-[10px] drop-shadow-[0_2px_2px_rgba(30,30,30,0.5)]"
                    : ""
                }`}
                onClick={() => toggleExpansion(index)}
              >
                <div className="flex gap-5 justify-left items-center">
                  <Image
                    src={data.image}
                    width={50}
                    height={50}
                    alt="user image"
                  />
                  <div>
                    <h3 className="text-[18px] font-[600]">{data.name}</h3>
                    {/* {renderStars(ratings[index])} */}
                  </div>
                </div>
              </div>
              {selectedTestimonial === index && (
                <div className="mt-4 p-4 bg-[#FAFBFF] rounded-[10px] drop-shadow-[0_2px_2px_rgba(30,30,30,0.5)] lg:hidden">
                  <h3 className="text-[24px] font-[600]">{data.header}</h3>
                  {/* {renderStars(ratings[index])} */}
                  <div className="flex flex-col gap-8 mt-2">
                    <p className="text-[20px] font-[400]">{data.content}</p>
                    <p className="text-[20px] font-[400]">{data.content2}</p>
                    <p className="text-[20px] font-[400]">{data.content3}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedTestimonial !== null && (
          <div className="hidden lg:block lg:w-1/2 ml-[100px]">
            <div className="flex flex-col gap-5">
              <h3 className="text-[24px] font-[600]">
                {TestimonialData[selectedTestimonial].header}
              </h3>
              {renderStars(ratings[selectedTestimonial])}
              <div className="flex flex-col gap-8">
                <p className="text-[20px] font-[400]">
                  {TestimonialData[selectedTestimonial].content}
                </p>
                <p className="text-[20px] font-[400]">
                  {TestimonialData[selectedTestimonial].content2}
                </p>
                <p className="text-[20px] font-[400]">
                  {TestimonialData[selectedTestimonial]?.content3}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Testimonial };
