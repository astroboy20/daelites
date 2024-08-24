import { teamData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosLink } from "react-icons/io";
import { FaReact } from "react-icons/fa"; // Import the React icon

const Team = () => {
  return (
    <section className="flex flex-col gap-10 lg:gap-5 justify-center items-center px-[6%] py-[15%] lg:px-[8%] lg:mx-[0%] lg:py-[10%]">
      <div>
        <h1 className="mb-5 relative text-[24px] lg:text-[36px] text-[#107C41] font-[700] text-center after:content-[''] after:w-[56px] lg:after:w-[85px] after:bg-[#8CC63F] after:m-auto after:mt-2 after:rounded-md after:absolute after:h-[5px] after:left-0 after:right-0 after:top-2/3 after:translate-y-2">
          Meet the Team
        </h1>
      </div>

      <div className="grid grid-cols-2 lg:flex gap-10 sm:gap-20 sm:flex-col lg:flex-row lg:gap-5 lg:flex-wrap lg:justify-center w-full">
        {teamData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col lg:items-center w-full lg:w-auto lg:p-5"
          >
            <div className="relative flex flex-col gap-5 items-center text-center">
              <div className="relative bg-[#d9d9d9] w-fit h-fit rounded-full flex items-end justify-end m-auto">
                <Image
                  src={data.src}
                  width={120}
                  height={120}
                  alt="team image"
                  className="w-fit h-fit m-auto z-10 rounded-full"
                />
                <Link
                  href={data.url}
                  target="_blank"
                    className="absolute z-20 bg-[#8CC63F] text-white font-bold rounded-full w-[25px] h-[25px] flex justify-center items-center transition-transform duration-300 hover:bg-[#107C41]"
                >
                  <span className="default-icon">in</span>
                  <IoIosLink
                    className="react-icon hidden"
                    size={16}
                  />
                </Link>
              </div>

              <div>
                <h3 className="text-[#107C41] text-[16px] lg:text-[18px] font-[600]">
                  {data.name}
                </h3>
                <div>
                  <p className="text-[15px] text-[#575757] lg:text-[15px] font-[400]">
                    {data.position}
                  </p>
                  <p>{data?.type}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Team };
