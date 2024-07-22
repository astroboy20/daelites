"use client";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { About } from "@/container/about";
import { Hero } from "@/container/hero";
import { Choose } from "@/container/choose";
import { Testimonial } from "@/container/testimonial";
import { Courses } from "@/container/courses";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);
  return (
    <main className="">
      <Header aboutRef={aboutRef} coursesRef={coursesRef} />
      <Hero />
      <About aboutRef={aboutRef} />
      <Courses coursesRef={coursesRef} />
      <Choose />
      <Testimonial />
      <Footer />
    </main>
  );
}
