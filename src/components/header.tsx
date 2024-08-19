"use client";
import Image from "next/image";
import React, { RefObject, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleScroll = (section: string, ref?: RefObject<HTMLDivElement>) => {
    if (section === "home") {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/");
      }
    } else if (section === "serviceOffering") {
      if (pathname !== "/courses") {
        router.push("/courses");
      }
    } else {
      ref?.current?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="flex justify-between items-center py-[3%] px-[6%] bg-[#fff] h-[92px] fixed w-full top-0 z-50">
      <Link href={"/"}>
        <Image src={"/images/logo.png"} width={170} height={55} alt="logo" />
      </Link>
      <div className="hidden lg:flex justify-between gap-[40px] cursor-pointer text-[16px] font-[500] text-[#2F2F2F]">
        <p className={pathname === "/" ? "border-b-2 border-[#8CC63F]" : ""}>
          Home
        </p>

        <Link
          href={"courses"}
          className={
            pathname === "/courses" ? "border-b-2 border-[#8CC63F]" : ""
          }
        >
          Courses
        </Link>

        <Link
          href={"/courses"}
          className={
            pathname === "/courses" ? "border-b-2 border-[#8CC63F]" : ""
          }
        >
          Service Offering
        </Link>
        <Link
          href={"/blog"}
          className={pathname === "/blog" ? "border-b-2 border-[#8CC63F]" : ""}
        >
          Blog
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <Link href={"https://bit.ly/DAELITES_WAITLIST"} target="_blank">
          <Button className="px-[10px] text-[12px] lg:text-[#fff] bg-[#8CC63F] rounded-[5px] py-[15px] lg:px-[30px] lg:text-[16px] font-[600] hover:bg-transparent border-2 border-[#8CC63F] hover:text-[#8CC63F]">
            Contact Us
          </Button>
        </Link>

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
            <Link
              href="/"
              className={pathname === "/" ? "border-b-2 border-[#8CC63F]" : ""}
            >
              Home
            </Link>
            {pathname === "/courses" ? (
              ""
            ) : (
              <p
                className={
                  pathname === "/about" ? "border-b-2 border-[#8CC63F]" : ""
                }
              >
                About Us
              </p>
            )}

            <p
              className={
                pathname === "/courses" ? "border-b-2 border-[#8CC63F]" : ""
              }
              onClick={() => handleScroll("serviceOffering")}
            >
              Service Offering
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export { Header };
