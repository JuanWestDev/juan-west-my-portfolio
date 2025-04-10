import React from "react";

const ListTechStack = (props) => {
  return (
    <div className="flex items-center p-2 bg-neutral-950/30 rounded-xl">
      <img
        alt={props.src + "logo"}
        src={props.src}
        width="20"
        height="20"
        className="filter invert bg-transparent "
      />
      <p className="ml-2 mr-1 hidden text-sm sm:block sm:text-neutral-300">
        {props.language}
      </p>
    </div>
  );
};

export default ListTechStack;
