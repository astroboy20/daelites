import { client } from "@/app/lib/sanity";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FullBlog } from "@/container/blog/full-blog";
import { fullBlogType } from "@/utils/interface";

interface Params {
  slug: string;
}

async function getData({ slug }: Params) {
  const query = `*[_type == "blog" && slug.current == "unlocking-the-power-of-data-science"]{
    "currentSlug":slug.current,
      title,
      content,
      "image":titleImage.asset._ref
  }[0]
      `;

  const data = await client.fetch(query);
  return data;
}
export default async function Page({ params }: { params: Params }) {
  const data: fullBlogType = await getData(params);
  console.log("object", data);
  return (
    <main>
      <Header />
      <FullBlog data={data} />
      <Footer />
    </main>
  );
}