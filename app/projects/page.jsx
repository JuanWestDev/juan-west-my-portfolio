import React from "react";
import TopSection from "@/components/TopSection";
import ProjectsBuilder from "@/components/ProjectsBuilder";

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
