import React from "react";

const TopSection = (props) => {
  return (
    <section className="pt-48 pb-20 pb-mx-auto container max-w-3xl px-4 md:px-0 z-50 space-y-4 text-center animate-fade-up">
      <h1 className="text-4xl text-gray-50 font-semibold md:text-4xl lg:text-6xl">
        {props.title}
      </h1>
      <h2 className="text-xl text-neutral-300 font-thin md:text-2xl lg:text-2xl">
        {props.desc}
      </h2>
    </section>
  );
};

export default TopSection;
