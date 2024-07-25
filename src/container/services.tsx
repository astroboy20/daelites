import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { services, courses } from "./data";

const Services = () => {
  return (
    <div className="bg-gray-100 mt-[92px] py-10 px-6 sm:px-10 lg:px-20">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-green-700">
        Our Service Offerings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700">
              {service.title}
            </h2>
            <p className="text-gray-600 mt-4">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-green-700 mb-8">
          Data Analytics Training Programs
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          {courses.map((course) => (
            <div key={course.id} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
              <p className="text-gray-700 mb-2">{course.description}</p>
              <p className="text-gray-700 mb-2">
                <strong>Duration:</strong> {course.duration}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Fee:</strong> {course.fee}
              </p>
              <p className="text-gray-700 mb-4">{course.extras}</p>
              <Link
                href={course.paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block "
              >
                <Button className=" m-auto lg:text-[#fff] bg-[#8CC63F] rounded-[50px] py-[15px] px-[30px] text-[12px] lg:text-[16px] font-[600] w-fit  hover:bg-transparent border-2 border-[#8CC63F] hover:text-[#8CC63F]">
                  Enroll now
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-green-700 mb-4">
          Have Questions?
        </h2>
        <p className="text-lg mb-4">
          If you have any inquiries or need more information, feel free to
          contact us.
        </p>
        <Link target="_blank" href={"https://bit.ly/DAELITES_WAITLIST"}>
          <Button className=" m-auto lg:text-[#fff] bg-[#8CC63F] rounded-[50px] py-[15px] px-[30px] text-[12px] lg:text-[16px] font-[600] w-fit  hover:bg-transparent border-2 border-[#8CC63F] hover:text-[#8CC63F]">
            <FaEnvelope className="mr-2" />
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export { Services };
