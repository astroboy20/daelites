"use client";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { About } from "@/container/home/about";
import { Team } from "@/container/home/team";
import { Choose } from "@/container/home/choose";
import { Courses } from "@/container/home/courses";
import { Hero } from "@/container/home/hero";
import { Testimonial } from "@/container/home/testimonial";
import { Help } from "@/components/help";

export default function Home() {
  // const aboutRef = useRef<HTMLDivElement>(null);
  // const coursesRef = useRef<HTMLDivElement>(null);
  return (
    <main className="">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Choose />
      <Testimonial />
      <Team />
      <Help />
      <Footer />
    </main>
  );
}
