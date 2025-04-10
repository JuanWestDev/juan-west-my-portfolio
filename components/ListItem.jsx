import React from "react";

const ListItem = (props) => {
  return (
    <li className="relative ml-10 pr-2 py-4">
      <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
        <img
          width="48"
          height="48"
          src={props.src}
          className="bg-transparent rounded-full object-center"
        ></img>
      </div>
      <div className="flex flex-col gap-1 text-white">
        <time className="text-xs text-gray-400">{props.time}</time>
        <h2 className="font-semibold leading-none">{props.place}</h2>
        <p className="text-sm text-gray-400">{props.position}</p>
        <p className="text-sm">{props.task}</p>
      </div>
    </li>
  );
};

export default ListItem;
