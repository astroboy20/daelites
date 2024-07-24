import { Button } from "@/components/ui/button";
import { ChooseData } from "../container/data";
import React from "react";

const Choose = () => {
  return (
    <section className="flex flex-col justify-center items-center py-20 mx-[10%] lg:py-[10%]">
      <div>
        <h1 className="mb-5 relative text-[24px] lg:text-[36px] text-[#107C41] font-[700] text-center after:content-[''] after:w-[56px] lg:after:w-[85px] after:bg-[#8CC63F] after:m-auto after:mt-2 after:rounded-md after:absolute after:h-[5px] after:left-0 after:right-0 after:top-2/3 after:translate-y-2">
          Why choose us
        </h1>
      </div>

      <div className="flex flex-wrap justify-center">
        {ChooseData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col items-center text-center w-full lg:w-[30%] p-8"
          >
            <div className="flex flex-col gap-5 items-center text-center">
              {data.icon}
              <h3 className="text-[#107C41] text-[20px] lg:text-[24px] font-[600]">
                {data.title}
              </h3>
              <p className="text-[16px] lg:text-[20px] font-[400]">
                {data.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 text-center">
        <Link href={"https://bit.ly/DAELITES_WAITLIST"} target="_blank">
          <Button className="text-[#107C41] border-2 border-[#8CC63F] bg-transparent rounded-[50px] py-[20px] px-[60px] text-[16px] font-[600] w-fit  hover:bg-[#8CC63F]   hover:text-[#fff]">
            Sign up now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export { Choose };
