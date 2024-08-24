import { dataType } from "@/app/blog/page";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";

type dataProps = {
  data: dataType[];
};
const Blog = ({ data }: dataProps) => {
  return (
    <main className="mt-[92px]">
      <div className="bg-[url('/images/blog-bg.png')] h-[300px] lg:h-[450px] w-full bg-cover bg-center"></div>
      <div className="bg-gray-100 py-10 lg:py-20 px-6 sm:px-10 lg:px-20">
        <h1 className=" text-[#107C41] relative text-[24px] lg:text-[36px] font-[700] text-center after:content-[''] after:w-[56px] lg:after:w-[85px] after:bg-[#8CC63F] after:m-auto after:mt-2 after:rounded-md after:absolute after:h-[5px] after:left-0 after:right-0 after:top-2/3 after:translate-y-2">
          Blog
        </h1>

        <div className="my-10 lg:my-20 lg:mx-[10%]">
          <div className="grid gap-14 lg:grid-cols-3">
            {data.map((post,idx) => (
              <div key={idx} className="flex flex-col gap-3">
                  <Image
                  src={urlFor(post.image).url()}
                  width={500}
                  height={500}
                  alt={`alt `}
                  className="rounded-[10px]"
                />
                <h1 className="text-[24px] font-[700]">{post.title}</h1>
                <p className="truncate text-[18px]">{post.smallDescription}</p>
                <Link href={"/"} className="text-[#8CC63F]">Continue Reading...</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export { Blog };
{
  /* {courses.map((course) => (
              <div key={course.id} className=" bg-white shadow-lg rounded-lg">
                <div className="w-fit rounded-lg">
                  <Image
                    src={course.src}
                    width={900}
                    height={500}
                    alt={`${course.title}`}
                    objectFit="contain"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-6 flex flex-col gap-5">
                  <div className="flex items-center gap-5">
                    <Image
                      src={course.logo}
                      width={40}
                      height={40}
                      alt={`${course.title}`}
                      objectFit="contain"
                    />
                    <h3 className="text-[24px] lg:text-[32px] font-[700] text-[#107C41]">
                      {course.title}
                    </h3>
                  </div>
                  <h3 className="text-[20px] lg:text-[24px] font-[600]">{course.sub_title}</h3>
                  <p className="text-black text-[16px] mb-2">
                    {course.description}
                  </p>
                  <div>
                    {course.offers.map((data) => (
                      <p className="text-[16px] mb-5 flex gap-2 items-center">
                        <MarkIcon /> {data}
                      </p>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-[20px] lg:text-[30px] font-[700] text-[#107C41]">
                      {course.fee}
                    </p>
                    <Link
                      href={course.paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block "
                    >
                      <Button className=" m-auto lg:text-[#fff] bg-[#8CC63F] rounded-[5px] py-[15px] px-[30px] text-[12px] lg:text-[16px] font-[600] w-fit  hover:bg-transparent border-2 border-[#8CC63F] hover:text-[#8CC63F]">
                        Enroll now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))} */
}
