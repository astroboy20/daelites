import Image from "next/image";
import React, { RefObject } from "react";

type AboutProps = {
  aboutRef: RefObject<HTMLDivElement>;
};

const About = ({ aboutRef }: AboutProps) => {
  return (
    <section
      ref={aboutRef}
      className="grid py-20 gap-8 lg:grid-cols-2 lg:gap-2 mx-[14%] lg:py-[5%]"
    >
      <div className="text-center lg:col-span-2">
        <h2 className="text-[24px] relative lg:text-[36px] lg:hidden text-[#107C41] font-[700] after:content-[''] after:w-[56px] after:bg-[#8CC63F] after:rounded-md after:absolute after:h-[5px] after:left-[40%] after:transform after:-translate-x-1/2 after:top-7 after:mt-2">
          About Us
        </h2>
      </div>
      <Image
        src={"/images/about.jpg"}
        width={400}
        height={5005}
        alt="about_img"
        objectFit="contain"
        className="mx-auto lg:mx-0 rounded"
      />
      <div className="flex flex-col gap-10">
        <h2 className="hidden lg:block relative text-[30px] text-[#107C41] font-[700] after:content-[''] after:w-[20%] after:bg-[#8CC63F] after:mt-2 after:rounded-md after:absolute after:h-[5px] after:top-10 after:left-0">
          About Us
        </h2>

        <p className="text-[16px] text-center lg:text-[20px] lg:text-left">
          We are a community of highly skilled data analysts who understands the
          importance of data literacy, that is, the ability for a person to
          understand, analyze, communicate, and reason with data in a meaningful
          way.
        </p>
        <p className="text-[16px] text-center lg:text-[20px] lg:text-left">
          We aid individuals and businesses in making informed data driven
          decisions.
        </p>

        <p className="text-[16px] text-center lg:text-[20px] lg:text-left">
          We are focused on mentoring aspiring data professionals in data tools
          and technology such as Excel, Power BI, Tableau, SQL, and Python.
        </p>
      </div>
    </section>
  );
};

export { About };
