import ProjectsBuilder from "@/app/components/ProjectsBuilder";
import TopSection from "@/app/components/TopSection";

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
