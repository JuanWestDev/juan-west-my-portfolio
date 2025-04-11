import React from "react";
import Details from "@/components/Details";
import ProjectsBuilder from "@/components/ProjectsBuilder";
import GradientTopLeft from "@/components/GradientTopLeft";
import GradientBottomRight from "@/components/GradientBottomRight";
import GradientBottomLeft from "@/components/GradientBottomLeft";
import GradientBottomMiddleRight from "@/components/GradientBottomMiddleRight";
import GradientTopSection from "@/components/GradientTopSection";
import "./globals.css";

export default function Home() {
  console.log("What am I doing here?(Home) -- SERVER/CLIENT");

  return (
    <>
      <Details />

      <section className="mt-15 mb-15 border-[1.5px] rounded-full bg-neutral-800 border-neutral-800 opacity-60 mx-auto animate-grow-size ease-out"></section>
      {/* <GradientTopLeft />
      <GradientBottomRight />
      <GradientBottomLeft /> */}
      <ProjectsBuilder />
      {/* <GradientBottomLeft />
      <GradientBottomMiddleRight />
      <GradientBottomRight /> */}
    </>
  );
}
