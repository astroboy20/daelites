import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-5 lg:grid grid-cols-2 lg:gap-2 mx-[14%] py-[10%]">
      {/* This h2 is shown on small screens and hidden on large screens */}
      <h2 className="block lg:hidden text-center text-[36px] text-[#107C41] font-[700] after:content-[''] after:w-[85px] after:bg-[#8CC63F] after:mt-2 after:rounded-md after:absolute after:h-[5px] after:top-10 after:left-1/2 after:transform after:-translate-x-1/2">
        About Us
      </h2>

      <Image
        src={"/images/about.png"}
        width={400}
        height={505}
        alt="about_img"
      />

      <div className="flex flex-col gap-10">
        {/* This h2 is hidden on small screens and shown on large screens */}
        <h2 className="hidden lg:block relative text-[36px] text-[#107C41] font-[700] after:content-[''] after:w-[85px] after:bg-[#8CC63F] after:mt-2 after:rounded-md after:absolute after:h-[5px] after:top-10 after:left-0">
          About Us
        </h2>

        <p className="text-[16px] text-center lg:text-[20px] lg:text-left">
          We are a community of highly skilled data analysts who have gained
          expertise and mastery in the technical and leadership skills needed to
          thrive in the data analytics industry.
        </p>
        <p className="text-[16px] text-center lg:text-[20px] lg:text-left">
          We are focused on mentoring aspiring data professionals who want to
          gain mastery in the data analytics tools, techniques, and technology.
        </p>

        <p className="text-[16px] text-center lg:text-[20px] lg:text-left">
          We believe in setting actionable learning goals while we hold you
          accountable to ensure your learning goals are achieved.
        </p>
      </div>
    </div>
  );
};

export { About };
