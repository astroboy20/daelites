"use client";
import React, { RefObject } from "react";
import { CoursesData } from "./data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Courses = () => {
  return (
    <section className="bg-[#fff] text-[#1a1a1a] flex flex-col gap-16 pt-[15%] px-[6%] lg:gap-14 lg:mx-[12%] lg:pt-[8%] ">
      <div className="">
        <h1 className="relative text-[#107C41] text-[24px] lg:text-[36px] font-[700] text-center after:content-[''] after:w-[56px] lg:after:w-[85px] after:bg-[#8CC63F] after:m-auto after:mt-2 after:rounded-md after:absolute after:h-[5px] after:left-0 after:right-0 after:top-2/3 after:translate-y-2">
          Courses we offer
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-10 sm:grid-cols-5  sm:gap-10 lg:grid-cols-5">
        {CoursesData.map((data) => (
          <div
            key={data.id}
            className="text-center flex flex-col items-center gap-5  cursor-pointer"
          >
            <p className="text-[18px] lg:text-[24px] font-[600]">
              {data.title}
            </p>
            <Image
              src={data.src}
              width={80}
              height={80}
              alt="course logo"
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      <div className=" text-center">
        <Link href={"/courses"} target="_blank">
          <Button className="text-[#107C41] border-2 border-[#8CC63F] bg-transparent rounded-[5px] py-[20px] px-[60px] text-[16px] font-[600] w-fit  hover:bg-[#8CC63F]   hover:text-[#fff]">
            View Courses
          </Button>
        </Link>
      </div>
    </section>
  );
};

export { Courses };
