"use-client";

import React from "react";

const TabButton = ({ name, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(name)}
      role="tab"
      aria-selected={isActive}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all bg-background text-black shadow cursor-pointer ${
        isActive
          ? " bg-gray-50"
          : "bg-black text-gray-50 hover:bg-neutral-900/50"
      }`}
    >
      {name}
    </button>
  );
};

export default TabButton;
