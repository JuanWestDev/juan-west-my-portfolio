import React from "react";
import ListTechStack from "./ListTechStack";
import tech from "../lib/tech";

// ring-4 ring-white shadow-[0_0_20px_10px_rgba(207,250,254,0.8)]
const Technologies = () => {
  return (
    <section className="flex items-center justify-center pt-10 mx-auto container max-w-3xl px-4 md:px-0 z-50 animate-fade-up">
      <div className=" flex shadow-[0px_0px_8px_2px_rgba(207,250,254,0.8)] bg-conic/[from_var(--border-angle)] from-black via-cyan-200 to-black p-px flex-wrap justify-center items-center  w-50 h-50 sm:w-100 sm:h-100 rounded-full animate-rotate-border hover:scale-[1.03]">
        <div className="flex flex-wrap bg-foreground p-px gap-1 justify-center items-center w-88 h-88 sm:gap-2 sm:w-98 sm:h-98 rounded-full">
          <div className="flex flex-wrap items-center justify-center gap-2 w-48 h-48 sm:w-75 sm:h-75 rounded-full">
            {tech.map((ts, index) => {
              return (
                <ListTechStack
                  key={index + 1}
                  language={ts.language}
                  src={ts.src}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
