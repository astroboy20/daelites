import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Arrow_Right, Facebook, LinkedIn, Twitter } from "../assets/index";
const Footer = () => {
  return (
    <div className="flex flex-col  py-[3%] px-[6%] bg-[#282828]">
      <div className="text-[#fff] flex justify-between ">
        <div>
          <h3 className="text-[36px] font-[700]">
            About <span className="text-[#008AB2]">Post</span>it.
          </h3>
          <p className="text-[15px] font-[400] leading-[35px]">
            Lorem ipsum dolor sit amet consectetur. Sit <br /> elementum in
            vulputate amet convallis suspendisse. <br /> Etiam eu aliquet
            faucibus mus eget eu nulla montes. <br /> Malesuada condimentum et
            maecenas et at aenean.
          </p>
        </div>
        <div>
          <h4 className="text-[20px] font-[700] mb-4"> Quick Menu</h4>
          <div className="flex flex-col text-[15px] font-[400] gap-4">
            <p>Home</p>
            <p>Stories</p>
            <p>Trending stories</p>
            <p>Popular stories</p>
          </div>
        </div>
        <div>
          <h4 className="text-[20px] font-[700] text-[#282828]">.</h4>
          <div className="flex flex-col text-[15px] font-[400] gap-4">
            <p> Signup</p>
            <p> Log In</p>
            <p> Contact Us</p>
          </div>
        </div>
        <div>
          <h4 className="text-[20px] font-[700] mb-4">
            Subscribe to our newsletter
          </h4>
          <div className="border-solid border-2 border-red flex bg-[#fff] p-1">
            <Input
              placeholder="Email address"
              type="email"
              className="border-none focus:border-none text-[#000] focus:bg-none p-0 focus-visible:ring-transparent px-5"
            />
            <Button className="bg-[#008AB2] flex items-center gap-2 text-[12px] font-[400]">
              Subscribe <Arrow_Right />{" "}
            </Button>
          </div>
        </div>
      </div>

      <hr className="mt-[30px] mb-[30px]" />
      <div className="ml-auto flex gap-5 items-center flex-start">
        <p className="text-[15px] font-[400] text-[#fff]">Terms and Policy</p>
        <div className="flex gap-3 items-center">
          <Facebook />
          <LinkedIn />
          <Twitter />
        </div>
      </div>
    </div>
  );
};

export { Footer };
