import React from "react";

const ListTechStack = (props) => {
  return (
    <div className="flex items-center p-2 bg-neutral-950/30 rounded-xl">
      <img
        alt={props.src + "logo"}
        src={props.src}
        loading="lazy"
        decoding="async"
        data-nimg="fill"
        className="filter invert bg-transparent w-[17px] h-[17px] sm:w-[20px] sm:h-[20px] "
      />
      <p className="ml-2 mr-1 hidden text-sm sm:block sm:text-neutral-300">
        {props.language}
      </p>
    </div>
  );
};

export default ListTechStack;
