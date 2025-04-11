"use client";

import React from "react";

const GradientTopSection = () => {
  return (
    <div className="absolute left-[50%] top-0 -translate-y-[2%] z-0 flex h-[35rem] w-full max-w-[1200px] translate-x-[-50%] items-center justify-center md-[-2%] ">
      <div className="relative ">
        <div className="gradient-1 absolute left-0 top-0"></div>
        <div className="gradient-2 absolute left-0 top-0 translate-x-[-50%]"></div>
        <div className="gradient-3 absolute right-0 top-0"></div>
      </div>
    </div>
  );
};

export default GradientTopSection;
