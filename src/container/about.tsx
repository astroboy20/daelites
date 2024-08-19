"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";


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

const About = () => {
  return (
    <section
      className="grid pt-20 gap-8 lg:grid-cols-2 lg:gap-20 px-[6%] items-start lg:mx-[8%] lg:pt-[5%]"
    >
      <div className="text-center lg:col-span-2">
        <h1 className="hidden lg:block text-[#107C41] relative text-[24px] lg:text-[36px] font-[700] text-center after:content-[''] after:w-[56px] lg:after:w-[85px] after:bg-[#8CC63F] after:m-auto after:mt-2 after:rounded-md after:absolute after:h-[5px] after:left-0 after:right-0 after:top-2/3 after:translate-y-2">
          About Us
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
                className="w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col gap-5 lg:gap-10">
      <h1 className="lg:hidden mb-5 relative text-[24px] lg:text-[36px] text-[#107C41] font-[700] text-center after:content-[''] after:w-[56px] lg:after:w-[85px] after:bg-[#8CC63F] after:m-auto after:mt-2 after:rounded-md after:absolute after:h-[5px] after:left-0 after:right-0 after:top-2/3 after:translate-y-2">
          About Us
        </h1>

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
