import React from "react";
import Shine from "./Shine";

const Links = (props) => {
  return (
    <a href={props.link} target="_blank">
      <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 p-2 relative group overflow-hidden bg-transparent text-gray-50 rounded-full hover:bg-transparent hover:text-gray-50 transition-transform duration-500 hover:scale-105 hover:-rotate-12 cursor-pointer">
        <img
          width="24"
          height="24"
          src={props.src}
          viewBox="0 0 24 24"
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          className="fiter invert"
        />
        <Shine />
      </button>
    </a>
  );
};

export default Links;
