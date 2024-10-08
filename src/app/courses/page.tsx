"use client";
import React from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Courses } from "@/container/courses";
import { Help } from "@/components/help";

export default function Page() {
  return (
    <>
      <Header/>
      <Courses />
      <Help/>
      <Footer />
    </>
  );
}
