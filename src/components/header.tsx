import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-[3%] px-[6%] bg-[#fff] h-[92px]">
      <Image src={"/images/logo.png"} width={170} height={55} alt="logo" />
      <div className="flex justify-between gap-[40px] cursor-pointer text-[16px] font-[500] text-[#2F2F2F]">
        {" "}
        <p>Home</p>
        <p>Courses</p>
        <p>About Us</p>
        <p>Contact</p>
      </div>
      <Button className="text-[#fff] bg-[#8CC63F] rounded-[50px] py-[15px] px-[30px] text-[16px] font-[600]">Enrol Today</Button>
    </div>
  );
};

export { Header };
