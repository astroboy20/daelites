"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse pb-[8%] lg:flex-row lg:justify-center xl:justify-start mt-[92px] pt-[6%] lg:pb-[0px] px-[5%] bg-[#F4FFE5]">
      <motion.div
        className="text-center flex flex-col gap-5 lg:text-left lg:flex lg:flex-col lg:gap-5 mt-[90px] lg:mt-7 lg:max-w-[50%]"
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
          Welcome to the Largest <br className="hidden lg:block" /> Data
          Analytics Community <br className="hidden lg:block" /> in Africa
        </h1>
        <p className="text-[18px] font-[400]">
          We are a community of highly skilled data analysts{" "}
          <br className="hidden lg:block" /> who have gained expertise and
          mastery in the <br className="hidden lg:block" /> technical and
          leadership skills needed to <br className="hidden lg:block" /> thrive
          in the data analytics industry.
        </p>

        <p className="text-[18px] font-[400]">
          We have a wide spread of community members in{" "}
          <br className="hidden lg:block" /> Nigeria, Kenya, South Africa,
          Ghana, Senegal, <br className="hidden lg:block" /> Egypt, Liberia,
          Ivory coast, Angola, <br className="hidden lg:block" />
          Togo, UK, USA, Malaysia, <br className="hidden lg:block" />{" "}
          Netherlands, Germany <br className="hidden lg:block" /> and Canada.
        </p>
        <div className="text-center lg:text-left">
          <Link href={"https://bit.ly/DAELITES_WAITLIST"} target="_blank">
            <Button className="m-auto lg:text-[#fff] bg-[#8CC63F] rounded-[50px] py-[15px] px-[30px] text-[12px] lg:text-[16px] font-[600] w-fit hover:bg-transparent border-2 border-[#8CC63F] hover:text-[#8CC63F]">
              Get Started
            </Button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="lg:max-w-[50%] lg:w-full"
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
          className="w-[300px] h-[300px] m-auto lg:w-[745px] lg:h-[745px]"
        />
      </motion.div>
    </div>
  );
};

export { Hero };
