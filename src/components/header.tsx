import Image from "next/image";
import React, { RefObject, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

type HeaderProps = {
  aboutRef: RefObject<HTMLDivElement>;
  coursesRef: RefObject<HTMLDivElement>;
};

const Header = ({ aboutRef, coursesRef }: HeaderProps) => {
  const [activeSection, setActiveSection] = useState<string | null>("home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleScroll = (section: string, ref?: RefObject<HTMLDivElement>) => {
    setActiveSection(section);
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      ref?.current?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className="flex justify-between items-center py-[3%] px-[6%] bg-[#fff] h-[92px] fixed w-full top-0 z-50">
      <Image src={"/images/logo.png"} width={170} height={55} alt="logo" />
      <div className="hidden lg:flex justify-between gap-[40px] cursor-pointer text-[16px] font-[500] text-[#2F2F2F]">
        <p
          className={
            activeSection === "home" ? "border-b-2 border-[#8CC63F]" : ""
          }
          onClick={() => handleScroll("home")}
        >
          Home
        </p>
        <p
          className={
            activeSection === "courses" ? "border-b-2 border-[#8CC63F]" : ""
          }
          onClick={() => handleScroll("courses", coursesRef)}
        >
          Courses
        </p>
        <p
          className={
            activeSection === "about" ? "border-b-2 border-[#8CC63F]" : ""
          }
          onClick={() => handleScroll("about", aboutRef)}
        >
          About Us
        </p>
        <Link href={"https://bit.ly/DAELITES_WAITLIST"} target="_blank">
          <p
            className={
              activeSection === "contact" ? "border-b-2 border-[#8CC63F]" : ""
            }
            onClick={() => handleScroll("contact")}
          >
            Contact
          </p>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <Button className="px-[10px] text-[12px] lg:text-[#fff] bg-[#8CC63F] rounded-[50px] py-[15px] lg:px-[30px] lg:text-[16px] font-[600] hover:bg-transparent border-2 border-[#8CC63F] hover:text-[#8CC63F]">
          Enrol Today
        </Button>

        {menuOpen ? (
          <MdCancel
            className="lg:hidden cursor-pointer"
            size={24}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        ) : (
          <GiHamburgerMenu
            className="lg:hidden cursor-pointer"
            size={24}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        )}
      </div>
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md">
          <div className="flex flex-col items-center gap-4 py-4">
            <p
              className={
                activeSection === "home" ? "border-b-2 border-[#8CC63F]" : ""
              }
              onClick={() => handleScroll("home")}
            >
              Home
            </p>
            <p
              className={
                activeSection === "courses" ? "border-b-2 border-[#8CC63F]" : ""
              }
              onClick={() => handleScroll("courses", coursesRef)}
            >
              Courses
            </p>
            <p
              className={
                activeSection === "about" ? "border-b-2 border-[#8CC63F]" : ""
              }
              onClick={() => handleScroll("about", aboutRef)}
            >
              About Us
            </p>
            <Link href={"https://bit.ly/DAELITES_WAITLIST"} target="_blank">
              <p
                className={
                  activeSection === "contact"
                    ? "border-b-2 border-[#8CC63F]"
                    : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export { Header };
