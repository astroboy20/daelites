"use client";
import React from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Courses } from "@/container/courses";
import { Help } from "@/components/help";
import { Services } from "@/container/services";

export default function Page() {
  return (
    <>
      <Header/>
      <Services />
      <Help/>
      <Footer />
    </>
  );
}
