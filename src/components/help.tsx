import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Help = () => {
  return (
    <main className="bg-[#F4FFE5] flex flex-col-reverse gap-10 lg:flex-row lg:justify-between items-center px-[6%] pb-[8%] pt-[8%] lg:px-[10%] lg:pt-[6%] lg:pb-[0]  relative">
      <div className="flex flex-col gap-5 z-10 text-center lg:text-left">
        <h1 className="text-[32px] text-[#0B9444] lg:text-[50px] leading:[40px] lg:leading-[63px] font-[700]">
          Need More <br className="hidden lg:flex " />
          Information?
        </h1>
        <p className="text-[18px] font-[400]">
          For any inquiries or additional <br className="lg:block hidden" />{" "}
          information, please don't <br className="lg:block hidden" /> hesitate
          to reach us.
        </p>
        <div className="text-center lg:text-left">
          <Link href={"https://bit.ly/DAELITES_WAITLIST"} target="_blank">
            <Button className="m-auto lg:text-[#fff] bg-[#8CC63F] rounded-[5px] mt-5 lg:mt-10 py-[15px] px-[30px] text-[12px] lg:text-[16px] font-[600] w-fit hover:bg-transparent border-2 border-[#8CC63F] hover:text-[#8CC63F]">
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-[50%] transform -translate-x-1/2 bg-[#8CC63F] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] z-0 rounded-full"></div>
        <Image
          src={"/images/help.png"}
          width={640}
          height={450}
          alt="help-image"
          className="relative z-10"
        />
      </div>

    </main>
  );
};

export { Help };
