import { fullBlogType } from "@/utils/interface";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";

type fullBlogProp = {
  data: fullBlogType;
};
const FullBlog = ({ data }: fullBlogProp) => {
  return (
    <main className="mt-[120px]">
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
        <div className="prose">
            <PortableText value={data.content}/>
        </div>
      </div>
    </main>
  );
};

export { FullBlog };
