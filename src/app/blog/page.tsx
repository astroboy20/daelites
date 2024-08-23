import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { client, urlFor } from "../lib/sanity";
import Image from "next/image";
async function getData() {
  const query = `
   *[_type == "blog"] | order(_createdAt desc){
    title,
      smallDescription,
      "image":titleImage.asset._ref,
      "currentSlug":slug.current,}
   `;
  const data = await client.fetch(query);
  return data;
}

type dataType = {
  title: string;
  smallDescription: string;
  image: any;
};
export default async function page() {
  const data: dataType[] = await getData();
  console.log(data);
  return (
    <main>
      <Header />
      <div className="mt-[92px]"></div>
      {data.map((post) => (
        <div>
          <h1>{post.title}</h1>
          <p>{post.smallDescription}</p>
          <Image
            src={urlFor(post.image).url()}
            width={500}
            height={500}
            alt={`alt `}
          />
        </div>
      ))}
      <Footer />
    </main>
  );
}
