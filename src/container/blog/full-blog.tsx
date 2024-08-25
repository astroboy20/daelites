import { fullBlogType } from "@/utils/interface";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import { Button } from "@/components/ui/button";

type fullBlogProp = {
  data: fullBlogType;
};
const FullBlog = ({ data }: fullBlogProp) => {
  return (
    <main className="mt-[120px] mx-[12%]">
      <div className="flex flex-col gap-10">
        <h1 className="tracking-tight text-[50px] font-[700] leading-[60px] text-center">
          {data?.title}
        </h1>
        <div className="m-auto">
          <Image
            src={urlFor(data.image).url()}
            width={1000}
            height={500}
            priority
            alt="blog-image"
            className="rounded-[10px]"
          />
        </div>
        <div className=" prose-[20px] ">
          <PortableText value={data.content}/>
        </div>
        <div>
            <Button className="text-[#107C41] text-[20px]">
                Back
            </Button>
        </div>
      </div>
    </main>
  );
};

export { FullBlog };
