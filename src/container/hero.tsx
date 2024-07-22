"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse pb-[8%] lg:flex-row justify-between  mt-[92px] pt-[6%] lg:pb-[0px] px-[5%] bg-[#F4FFE5]">
      <motion.div
        className="text-center flex flex-col gap-5 lg:text-left lg:flex lg:flex-col lg:gap-5 mt-[90px] lg:mt-7"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
          duration: 1.0,
          delay: 0.2,
        }}
      >
        <h1 className="text-[32px] text-[#0B9444] lg:text-[40px] font-[700]">
          Empower Your Future <br className="hidden lg:block" /> with Data
          Analytics <br className="hidden lg:block" /> Mastery
        </h1>
        <p className="text-[18px] font-[400]">
          Immerse yourself in a world of knowledge. Explore{" "}
          <br className="hidden lg:block" /> captivating subjects, experience
          transformative <br className="hidden lg:block" /> learning, and evolve
          into your best self."
        </p>
        <div className="text-center lg:text-left">
          <Button className=" m-auto lg:text-[#fff] bg-[#8CC63F] rounded-[50px] py-[15px] px-[30px] text-[12px] lg:text-[16px] font-[600] w-fit  hover:bg-transparent border-2 border-[#8CC63F] hover:text-[#8CC63F]">
            Get Started
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
          duration: 1.0,
          delay: 0.2,
        }}
      >
        <Image
          src={"/images/hero.png"}
          width={745}
          height={745}
          alt="hero-image"
          objectFit="contain"
          className="w-300px h-300px lg:w-745px h-745px"
        />
      </motion.div>
    </section>
  );
};

export { Hero };
