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
          <h3 className="text-[24px] lg:text-[36px] font-[700] mb-5 lg:mb-0">
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
          <h4 className="text-[18px] font-[700] mb-4"> Quick Menu</h4>
          <div className="flex flex-col text-[14px] font-[400] gap-4">
            <p>Home</p>
            <p>About us</p>
            <p>Service offering</p>
          </div>
        </div>
        <div>
          <h4 className="text-[18px] font-[700] mb-4"> Contact us</h4>
          <div className="flex flex-col text-[14px] font-[400] gap-4">
            <Link
              href={"mailto:hello.daelites@gmail.com"}
              className="flex items-center gap-1"
            >
              <MdEmail /> hello.daelites@gmail.com
            </Link>
            <p className="flex items-center gap-1">
              <MdOutlineLocalPhone />
              +2348103521577
            </p>
            <p className="flex items-center gap-1">
              <MdOutlineLocalPhone />
              +2349034750619
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col text-[14px] font-[400] gap-4">
            <p>
              To join our WhatsApp Group: <br /> send a message to
              +2349034750619 <br /> requesting to be added to the groups
            </p>
          </div>
        </div>
        {/* <div>
          <h4 className="text-[20px] font-[700] mb-4">
            Subscribe to our newsletter
          </h4>
          <div className="border-solid border-2 border-red flex bg-[#fff] p-1">
          <Input
              placeholder="Email address"
              type="email"
              className="border-none focus:border-none text-[#000] focus:bg-none p-0 focus-visible:ring-transparent px-5"
            />
          <Link target="_blank" href={"https://bit.ly/DAELITES_WAITLIST"}>
            <Button className="bg-[#008AB2] flex items-center gap-2 text-[12px] font-[400]">
              Subscribe <Arrow_Right />{" "}
            </Button>
          </Link>

          </div>
        </div> */}
      </div>

      <hr className="mt-[30px] mb-[30px]" />
      <div className="ml-auto flex gap-5 items-center flex-start">
        <p className="text-[15px] font-[400] text-[#fff]">Terms and Policy</p>
        <div className="flex gap-3 items-center">
          <Link href={"https://bit.ly/DAElites_Linkedln"} target="_blank">
            <LinkedIn />
          </Link>
          <Link href={"https://twitter.com/DAElites_Global"} target="_blank">
            <Twitter />
          </Link>
          <Link href={"https://bit.ly/DAELITES-YOUTUBE"} target="_blank">
            <FaYoutube color="#fff" size={"28px"} />
          </Link>
          <Link href={"https://bit.ly/DAElites_Instagram"} target="_blank">
            <FaInstagramSquare color="#fff" size={"28px"} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
