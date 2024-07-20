"use client";

import React, { useState } from "react";
import { TestimonialData } from "./data";
import Image from "next/image";

const Testimonial = () => {
  // Initialize selectedTestimonial to 0 to show the first one by default
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  const toggleExpansion = (index:any) => {
    setSelectedTestimonial((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mx-[8%] py-[5%]">
      <div>
        <h1 className="mb-5 relative text-[36px] text-[#107C41] font-[700] text-center after:content-[''] after:w-[85px] after:bg-[#8CC63F] after:m-auto after:mt-2 after:rounded-md after:absolute after:h-[5px] after:left-0 after:right-0 after:top-2/3 after:translate-y-2">
          Testimonials
        </h1>
      </div>

      <div>
        {TestimonialData.map((data, index) => (
          <div
            key={index}
            className="grid grid-cols-2 mb-5 border p-4 cursor-pointer"
            onClick={() => toggleExpansion(index)}
          >
            <div className="flex gap-5 justify-center items-center">
              <div>
                <Image
                  src={data.image}
                  width={50}
                  height={50}
                  alt="user image"
                />
              </div>

              <div>
                <h3 className="text-[18px] font-[600]">{data.name}</h3>
                <p className="text-[14px] font-[400] text-[#ACACAC]">
                  {data.job}
                </p>
              </div>
            </div>

            {selectedTestimonial === index && (
              <div className="col-span-2 mt-4 p-4 border-t-2">
                <h3 className="text-[24px] font-[600]">{data.header}</h3>
                <p className="text-wrap text-[20px] font-[400]">{data.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Testimonial };
