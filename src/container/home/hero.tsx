"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AIcon, BIcon, CIcon } from "@/assets";

const Hero = () => {
  return (
    <div className="mt-[92px] flex flex-col-reverse pb-[8%] lg:flex-row lg:justify-center xl:justify-start lg:mt-[92px]  lg:pb-[0px] h-fit lg:h-[700px]  bg-[url('/images/Hero-section.png')]">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
          duration: 1.0,
          delay: 0.2,
        }}
        className="absolute top-0 sm:w-full sm:right-0 lg:left-[50%] z-0 w-full lg:w-auto"
      >
        <Image
          src={"/images/Frame.png"}
          width={488}
          height={488}
          alt="hero-image"
          objectFit="contain"
          className="w-[400px] h-[400px] ml-auto lg:w-[758px] lg:h-[481px]"
        />
      </motion.div>

      <motion.div
        className="text-center flex flex-col px-[6%] gap-5 lg:text-left lg:flex lg:flex-col lg:gap-5 mt-[350px] sm:mt-[600px] lg:pt-[6%] lg:pl-[6%] lg:mt-7 lg:max-w-[50%]"
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
        <h1 className="text-[32px] text-[#0B9444] lg:text-[50px] leading-[60px] font-[700]">
          Empower Your <br className="hidden lg:block" /> Future with Data{" "}
          <br className="hidden lg:block" /> Analytics Mastery
        </h1>

        <p className="text-[18px] font-[400]">
          Join our community of expert analysts mastering{" "}
          <br className="hidden lg:block" /> both technical and leadership
          skills essential for <br className="hidden lg:block" /> thriving in
          the data analytics industry.
        </p>
        <div className="text-center lg:text-left">
          <Link href={"https://bit.ly/DAELITES_WAITLIST"} target="_blank">
            <Button className="m-auto lg:text-[#fff] bg-[#8CC63F] rounded-[5px] mt-10 py-[15px] px-[30px] text-[12px] lg:text-[16px] font-[600] w-fit hover:bg-transparent border-2 border-[#8CC63F] hover:text-[#8CC63F]">
              Get Started
            </Button>
          </Link>
        </div>
      </motion.div>

      <div className="absolute top-[120px] w-full lg:w-fit m-auto left-auto lg:left-[50%] lg:top-[150px]">
        <motion.span
          initial={{ opacity: 0, x: 50, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[20%] left-[10%] sm:top-[40%] sm:left-[13%] lg:top-[30%] lg:left-[-8%] z-20"
        >
          <AIcon />
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -50, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute top-[70%] left-[65%] sm:top-[70%] sm:left-[73%] lg:top-[80%] lg:left-[80%] z-20"
        >
          <BIcon />
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -50, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute top-2 left-[65%] sm:top-2 sm:left-[63%] lg:top-5 lg:left-[70%] z-20"
        >
          <CIcon />
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: "100dvh" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            duration: 1.0,
            delay: 0.2,
          }}
        >
          <Image
            src={"/images/a.png"}
            width={488}
            height={488}
            alt="hero-image"
            objectFit="contain"
            className="w-auto h-auto sm:w-[488px] sm:h-[488px]  lg:w-[488px] lg:h-[488px] m-auto "
          />
        </motion.div>
      </div>
    </div>
  );
};

export { Hero };
