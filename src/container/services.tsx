import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { services } from "@/utils/data";
import { MdOutlineArrowOutward } from "react-icons/md";

const Services = () => {
  return (
    <main className="mt-[92px]">
      <div className="bg-[url('/images/service-bg.png')] h-[300px] lg:h-[450px] w-full bg-cover bg-center"></div>

      <div className="bg-gray-100 py-10 lg:py-20 px-6 sm:px-10 lg:px-20">
        <h1 className=" text-[#107C41] relative text-[24px] lg:text-[36px] font-[700] text-center after:content-[''] after:w-[56px] lg:after:w-[85px] after:bg-[#8CC63F] after:m-auto after:mt-2 after:rounded-md after:absolute after:h-[5px] after:left-0 after:right-0 after:top-2/3 after:translate-y-2">
         Service Offers
        </h1>

        <div className="grid grid-cols-1 gap-14 lg:gap-10 my-14 lg:my-24">
          {services.map((service) => (
            <div
              key={service.id}
              className="grid grid-cols-1 gap-10 md:grid-cols-2 sm:gap-24 items-center"
            >
              <Image
                src={service.src}
                width={350}
                height={350}
                alt={service.title}
                className={`w-full h-auto ${
                  service.id % 2 === 0 ? "md:order-last" : ""
                }`}
              />
              <div>
                <h2 className="text-[24px] lg:text-[36px] font-[700] lg:leading-[46px]">
                  {service.title}
                </h2>
                <p className="text-[20px] lg:text-[24px] mt-4">{service.description}</p>
                <Link
                  href={service.url}
                  className="text-[#8CC63F] font-[600] text-[20px] mt-5 flex items-center"
                >
                  Learn more <MdOutlineArrowOutward />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export { Services };
