import React from "react";
import TopSection from "@/components/TopSection";
import ProjectsBuilder from "@/components/ProjectsBuilder";
import GradientTopLeft from "@/components/GradientTopLeft";
import GradientBottomRight from "@/components/GradientBottomRight";
import GradientBottomLeft from "@/components/GradientBottomLeft";
import GradientBottomMiddleRight from "@/components/GradientBottomMiddleRight";

export default function Projects() {
  return (
    <>
      <TopSection
        title="Projects"
        desc="These are the projects that show my skills and technologies."
      />

      <ProjectsBuilder />
    </>
  );
}
