import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { About } from "@/container/about";
import { Hero } from "@/container/hero";
import { Choose } from "@/container/choose";
import { Testimonial } from "@/container/testimonial";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <About />
      <Choose />
      <Testimonial />
      <Footer />
    </main>
  );
}
