"use client";
import React from "react";
import { Footer } from "@/components/footer";
import { Services } from "@/container/services";
import { Header } from "@/components/header";

export default function Page() {
  return (
    <>
      <Header/>
      <Services />
      <Footer />
    </>
  );
}
