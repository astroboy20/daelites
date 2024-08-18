"use client";
import Image from "next/image";
import React, { RefObject } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

type AboutProps = {
  aboutRef: RefObject<HTMLDivElement>;
};

const sliderImages = [
  {
    id: 1,
    src: "/images/slider/a.png",
  },
  {
    id: 2,
    src: "/images/slider/b.png",
  },
  {
    id: 3,
    src: "/images/slider/c.png",
  },
  {
    id: 4,
    src: "/images/slider/d.png",
  },
  {
    id: 5,
    src: "/images/slider/e.png",
  },
  {
    id: 6,
    src: "/images/slider/f.png",
  },
  {
    id: 7,
    src: "/images/slider/g.png",
  },
];

const About = ({ aboutRef }: AboutProps) => {
  return (
    <section
      ref={aboutRef}
      className="grid py-20 gap-8 lg:grid-cols-2 lg:gap-20  mx-[14%] lg:py-[5%]"
    >
      <div className="text-center lg:col-span-2">
        <h1 className="hidden lg:block text-[#107C41] relative text-[24px] lg:text-[36px] font-[700] text-center after:content-[''] after:w-[56px] lg:after:w-[85px] after:bg-[#8CC63F] after:m-auto after:mt-2 after:rounded-md after:absolute after:h-[5px] after:left-0 after:right-0 after:top-2/3 after:translate-y-2">
          About
        </h1>
      </div>
      <div className="w-full h-fit overflow-hidden">
        <Swiper
          spaceBetween={5}
          slidesPerView={1}
          modules={[Autoplay]}
          className="h-full "
          autoplay={{ delay: 1500 }}
          loop={true}
        >
          {sliderImages.map((data) => (
            <SwiperSlide key={data.id}>
              <Image
                src={data.src}
                width={700}
                height={700}
                alt="about_img"
                objectFit="cover"
                priority={data.id === 1} // Correct index for priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col gap-10">
        <h2 className="flex lg:hidden relative text-[30px] text-[#107C41] font-[700] after:content-[''] after:w-[20%] after:bg-[#8CC63F] after:mt-2 after:rounded-md after:absolute after:h-[5px] after:top-10 after:left-0">
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
    </section>
  );
};

export { About };
