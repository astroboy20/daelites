import { teamData } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <section className="flex flex-col gap-10 lg:gap-5 justify-center items-center px-[6%] py-[15%]  lg:mx-[0%] lg:py-[10%]">
      <div>
        <h1 className="mb-5 relative text-[24px] lg:text-[36px] text-[#107C41] font-[700] text-center after:content-[''] after:w-[56px] lg:after:w-[85px] after:bg-[#8CC63F] after:m-auto after:mt-2 after:rounded-md after:absolute after:h-[5px] after:left-0 after:right-0 after:top-2/3 after:translate-y-2">
          Meet the Team
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:flex gap-10 sm:gap-20 sm:flex-col lg:flex-row lg:gap-5 lg:flex-wrap lg:justify-center w-full">
        {teamData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col lg:items-center w-full lg:w-[20%]  lg:p-5"
          >
            <div className="flex flex-col gap-5 items-left text-center">
              <div className="m-auto bg-[#d9d9d9] p-5 w-[110px] h-[110px] flex items-center rounded-full">
                <Image
                  src={data.src}
                  width={140}
                  height={140}
                  alt="team image"
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="text-[#107C41]  text-[16px] lg:text-[18px] font-[600] ">
                  {data.name}
                </h3>
                <p className="text-[15px] text-[#575757] lg:text-[15px]  font-[400] ">
                  {data.position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Team };
