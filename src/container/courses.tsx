import React, { RefObject } from "react";
import { CoursesData } from "./data";
import Image from "next/image";

type CourseProps = {
  coursesRef: RefObject<HTMLDivElement>;
};
const Courses = ({ coursesRef }: CourseProps) => {
  return (
    <section ref={coursesRef} className="bg-[#282828] px-[14%] py-[10%]">
      <div>
        <h1 className="mb-5 relative text-[24px] lg:text-[36px] text-[#fff] font-[700] text-center after:content-[''] after:w-[56px] lg:after:w-[85px] after:bg-[#8CC63F] after:m-auto after:mt-2 after:rounded-md after:absolute after:h-[5px] after:left-0 after:right-0 after:top-2/3 after:translate-y-2">
          Courses we offer
        </h1>
      </div>

      <div className="grid  grid-cols-2 lg:grid-cols-4 place-items-center">
        {CoursesData.map((data) => (
          <div
            key={data.id}
            className="text-center flex flex-col items-center gap-5 mt-[70px]"
          >
            <p className="text-[24px] font-[600] text-white">{data.title}</p>
            <Image src={data.src} width={100} height={100} alt="course logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export { Courses };
