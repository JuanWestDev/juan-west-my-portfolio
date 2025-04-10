import React from "react";
import Details from "@/components/Details";
import GradientTopLeft from "@/components/GradientTopLeft";
import GradientBottomRight from "@/components/GradientBottomRight";
import ProjectsBuilder from "@/components/ProjectsBuilder";
import GradientBottomLeft from "@/components/GradientBottomLeft";
import GradientBottomMiddleRight from "@/components/GradientBottomMiddleRight";
import "./globals.css";

export default function Home() {
  console.log("What am I doing here?(Home) -- SERVER/CLIENT");

  return (
    <>
      <Details />
      <section className="mt-15 mb-15 border-[1.5px] rounded-full bg-neutral-800 border-neutral-800 opacity-60 mx-auto animate-grow-size ease-out"></section>
      <GradientTopLeft />
      <GradientBottomRight />

      <GradientBottomLeft />
      <ProjectsBuilder />
      <GradientBottomLeft />
      <GradientBottomMiddleRight />
    </>
  );
}
