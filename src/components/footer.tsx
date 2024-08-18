import React from "react";
import { LinkedIn, Twitter } from "../assets/index";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="flex flex-col py-[10%]  lg:py-[3%] px-[6%] bg-[#282828]">
      <div className="text-[#fff] flex flex-col gap-8 lg:flex-row justify-between items-start">
        <div>
          <h3 className="text-[24px] text-[#8CC63F] font-[700] mb-5 lg:mb-0">
            About DAELITES
          </h3>
          <p className="text-[14px] font-[400] leading-[35px]">
            We are the largest community empowering Africans with data analytics
            <br />
            tools and technology, and we have a wide spread of community members
            <br />
            in Nigeria, Kenya, South Africa, Ghana, Senegal, Egypt, Liberia,
            <br />
            Ivory coast, Angola, Togo, UK, USA, Malysia, Netherlands, Germany
            <br />
            and Canada.
          </p>
        </div>
        <div>
          <h4 className="text-[24px] text-[#8CC63F] font-[700] mb-4">
            {" "}
            Quick Menu
          </h4>
          <div className="flex flex-col text-[14px] font-[400] gap-4">
            <Link href={"/"}>
              {" "}
              <p>Home</p>
            </Link>
            <Link href={"/courses"}>
              <p>Courses</p>
            </Link>
            <Link href={"/services"}>
              <p>Services</p>
            </Link>
            <Link href={"/blog"}>
              <p>Blog </p>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-[24px] text-[#8CC63F] font-[700] mb-4">
            {" "}
            Contact us
          </h4>
          <div className="flex flex-col text-[14px] font-[400] gap-4">
            <Link
              href={"mailto:hello.daelites@gmail.com"}
              className="flex items-center gap-1"
            >
              <MdEmail color="#8CC63F" /> hello.daelites@gmail.com
            </Link>
            <p className="flex items-center gap-1">
              <MdOutlineLocalPhone color="#8CC63F" />
              +2348103521577
            </p>
            <p className="flex items-center gap-1">
              <MdOutlineLocalPhone color="#8CC63F" />
              +2349034750619
            </p>
          </div>

          <div className="mt-5 flex gap-5 items-center flex-start">
            <div className="flex gap-3 items-center">
              <Link href={"https://bit.ly/DAElites_Linkedln"} target="_blank">
                <LinkedIn />
              </Link>
              <Link
                href={"https://twitter.com/DAElites_Global"}
                target="_blank"
              >
                <Twitter />
              </Link>
              <Link href={"https://bit.ly/DAELITES-YOUTUBE"} target="_blank">
                <FaYoutube color="#fff" size={"15px"} />
              </Link>
              <Link href={"https://bit.ly/DAElites_Instagram"} target="_blank">
                <FaInstagramSquare color="#fff" size={"15px"} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-[30px] mb-[30px]" />
    </footer>
  );
};

export { Footer };
