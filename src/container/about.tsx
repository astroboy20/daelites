import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-2 gap-2 mx-[14%] py-[10%]">
      <Image
        src={"/images/about.png"}
        width={400}
        height={505}
        alt="about_img"
      />
      <div className="flex flex-col gap-10">
        <h2 className="relative text-[36px] text-[#107C41] font-[700] after:content-[''] after:w-[85px] after:bg-[#8CC63F]  after:mt-2 after:rounded-md after:absolute after:h-[5px] after:top-10 after:left-0">
          About Us
        </h2>

        <p className="text-[20px]">
          We are a community of highly skilled data analysts who have gained
          expertise and mastery in the technical and leadership skills needed to
          thrive in the data analytics industry.
        </p>
        <p className="text-[20px]">
          We are focused on mentoring aspiring data professionals who want to
          gain mastery in the data analytics tools, techniques, and technology.
        </p>

        <p className="text-[20px]">
          We believe in setting actionable learning goals while we hold you
          accountable to ensure your learning goals are achieved.
        </p>
      </div>
    </div>
  );
};

export { About };
