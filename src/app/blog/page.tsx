import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { client } from "../lib/sanity";
import { Blog } from "@/container/blog/blog";


export interface dataType  {
  title: string;
  smallDescription: string;
  image: any;
};

async function getData() {
  const query = `
  *[_type == "blog"] | order(_createdAt desc){
    title,
      smallDescription,
      "image":titleImage.asset._ref,
      "currentSlug":slug.current,
      
  }
   `;
  const data = await client.fetch(query);
  return data;
}

export default async function page() {
  const data:dataType[] = await getData();
  console.log(data)
  return (
    <main>
      <Header />
      <Blog data={data} />
      <Footer />
    </main>
  );
}
