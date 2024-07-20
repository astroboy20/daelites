import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-between  mt-[92px] px-[6%] bg-[#F4FFE5]">
      <div className="flex flex-col gap-5 mt-[90px]">
        <h1 className="text-[#0B9444] text-[40px] text-wrap font-[700]">
          Empower Your Future <br /> with Data Analytics <br /> Mastery
        </h1>
        <p className="text-[18px] font-[400]">
          Immerse yourself in a world of knowledge. Explore <br /> captivating
          subjects, experience transformative <br /> learning, and evolve into
          your best self."
        </p>
        <Button className="text-[#fff] bg-[#8CC63F] rounded-[50px] py-[15px] px-[30px] text-[16px] font-[600] w-fit  hover:bg-transparent border-2 border-[#8CC63F] hover:text-[#8CC63F]">
          Get Started
        </Button>
      </div>
      <Image
        src={"/images/hero.png"}
        width={745}
        height={745}
        alt="hero-image"
      />
    </div>
  );
};

export { Hero };
