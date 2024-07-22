import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-[3%] px-[6%] bg-[#fff] h-[92px] fixed w-full top-0 z-50">
      <Image src={"/images/logo.png"} width={170} height={55} alt="logo" />
      <div className="hidden lg:flex justify-between gap-[40px] cursor-pointer text-[16px] font-[500] text-[#2F2F2F]">
        {" "}
        <p>Home</p>
        <p>Courses</p>
        <p>About Us</p>
        <p>Contact</p>
      </div>
      <Button className="px-[10px] text-[12px] lg:text-[#fff] bg-[#8CC63F] rounded-[50px] py-[15px] lg:px-[30px] lg:text-[16px] font-[600] hover:bg-transparent border-2 border-[#8CC63F] hover:text-[#8CC63F]">Enrol Today</Button>
    </div>
  );
};

export { Header };
