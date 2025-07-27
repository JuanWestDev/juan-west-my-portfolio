import React from "react";
import Shine from "./Shine.jsx";

const PrimaryButton = (props) => {
  return (
    <button className="inline-flex items-center justify-center gap-1 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 relative group overflow-hidden bg-transparent text-gray-50 rounded-full hover:bg-transparent hover:text-gray-50 transition-transform duration-500 hover:scale-105 cursor-pointer">
      <img
        width="15"
        height="15"
        src={props.img}
        loading="lazy"
        decoding="async"
        data-nimg="fill"
      />
      <span className="font-roboto">{props.name}</span>
      <Shine />
    </button>
  );
};

export default PrimaryButton;
