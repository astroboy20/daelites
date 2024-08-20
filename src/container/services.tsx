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

      <div className="bg-gray-100  py-10 px-6 sm:px-10 lg:px-20">
        <h1 className="text-[#107C41] text-[24px] lg:text-[36px] font-bold text-center relative after:content-[''] after:w-[56px] lg:after:w-[85px] after:bg-[#8CC63F] after:mt-2 after:rounded-md after:absolute after:h-[5px] after:left-0 after:right-0 after:top-[calc(100%+8px)] after:m-auto">
          Service Offers
        </h1>

        <div className="grid grid-cols-1 gap-10 mt-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
            >
              <Image
                src={service.src}
                width={460}
                height={350}
                alt={service.title}
                className={`w-full h-auto ${
                  service.id % 2 === 0 ? "md:order-last" : ""
                }`}
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-700">
                  {service.title}
                </h2>
                <p className="text-gray-600 mt-4">{service.description}</p>
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
