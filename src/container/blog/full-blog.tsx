import { fullBlogType } from "@/utils/interface";
import React from "react";
import Image from "next/image";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import { Button } from "@/components/ui/button";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
import urlBuilder from "@sanity/image-url";
import imageUrlBuilder from "@sanity/image-url";

type fullBlogProp = {
  data: fullBlogType;
};

const builder = imageUrlBuilder(client);

const FullBlog = ({ data }: fullBlogProp) => {
  const myPortableTextComponents = {
    types: {
      image: ({
        value,
        isInline,
      }: {
        value: any | string;
        isInline: boolean;
      }) => (
        <img
          src={builder
            .image(value)
            .width(isInline ? 100 : 800)
            .fit("max")
            .auto("format")
            .url()}
        />
      ),
    },
  };
  return (
    <main className="my-[120px] mx-6 sm:mx-[12%] xl:mx-[12%]">
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
        <h1 className="tracking-tight text-[32px] sm:text-[40px] md:text-[50px] font-[700] leading-[40px] sm:leading-[50px] md:leading-[60px] text-center">
          {data?.title}
        </h1>
        <div className="m-auto w-full max-w-[1000px]">
          <Image
            src={urlFor(data.image).url()}
            width={1000}
            height={500}
            priority
            alt="blog-image"
            className="rounded-[10px] w-full h-auto object-cover"
          />
        </div>
        <div className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl w-full">
          <PortableText
            value={data.content}
            components={myPortableTextComponents}
          />
        </div>
        <div className="ml-auto">
          <Link
            href={"/blog"}
            className=" flex items-center gap-2 text-[#107C41] text-[16px] sm:text-[18px] md:text-[20px] bg-transparent border-2 border-[#8CC63F] rounded-[5px] px-[20px] sm:px-[25px] md:px-[33px] py-[8px] sm:py-[9px] md:py-[10px] hover:bg-[#107C41] hover:text-white"
          >
            <IoMdArrowBack /> Back
          </Link>
        </div>
      </div>
    </main>
  );
};

export { FullBlog };
