import Details from "@/app/components/Details";
import Experience from "@/app/components/Experience";
import ProjectsBuilder from "@/app/components/ProjectsBuilder";
import "./globals.css";

export default function Home() {
  console.log("What am I doing here?(Home) -- SERVER/CLIENT");

  return (
    <>
      <Details />
      <Experience />
      <section className="mt-15 mb-15 border-[1.5px] rounded-full bg-neutral-800 border-neutral-800 opacity-60 mx-auto "></section>
      {/* <GradientTopLeft />
      <GradientBottomRight />
      <GradientBottomLeft /> */}
      <ProjectsBuilder />
    </>
  );
}
