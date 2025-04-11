import React from "react";
import ListProjects from "./ListProjects";
import projectsList from "../lib/projectsList";

const ProjectsBuilder = () => {
  return (
    <section className=" flex flex-col items-center pt-10 mx-auto container max-w-[1168px] px-4 md:px-0 md:pt-20 z-50 animate-fade-up">
      <div className="flex flex-row w-full z-20 sm:w-[1000px] max-w-[1000px] mb-5 tracking-widest">
        <p className="text-xl font-light text-neutral-300 font-roboto">
          My Work
        </p>
      </div>
      <div className="flex flex-wrap max-w-[1000px] gap-10 ">
        {projectsList.map((project, index) => {
          return (
            <ListProjects
              key={index + 1}
              src={project.src}
              name={project.name}
              des={project.des}
              web={project.web}
              companyImg={project.companyImg}
              companyName={project.companyName}
              languages={project.languages}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsBuilder;
