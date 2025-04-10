"use client";

import React, { useState } from "react";
import TabButton from "./TabButton";
import workList from "../lib/workList";
import ListItem from "./ListItem";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("Work");

  function handleClick(tabName) {
    setActiveTab(tabName);
    console.log(activeTab);
  }

  return (
    <section className="mb-10 mx-auto container max-w-3xl px-4 md:px-0z-50 animate-fade-up">
      <div className="flex flex-row w-full mb-5 tracking-widest">
        <p className="text-xl font-light text-neutral-300 font-roboto">
          Experience
        </p>
      </div>
      <div
        className="h-9 items-center justify-center rounded-lg bg-neutral-950/30 text-gray-50 mb-2 grid w-full grid-cols-2"
        role="tablist"
        aria-orientation="horizontal"
      >
        <TabButton
          name="Work"
          isActive={activeTab === "Work"}
          onClick={handleClick}
        />

        <TabButton
          name="Education"
          isActive={activeTab === "Education"}
          onClick={handleClick}
        />
      </div>

      <div
        id="work-panel"
        role="tabpanel"
        className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-neutral-300 rounded-lg"
      >
        {activeTab === "Work" ? (
          <ul className="ml-10 border-l-1 border-neutral-300 list-none">
            {workList[0].work.map((item, index) => {
              //I know index is not recommended for key just using it for this website
              return (
                <ListItem
                  key={index}
                  time={item.time}
                  place={item.place}
                  position={item.position}
                  task={item.task}
                  src={item.src}
                />
              );
            })}
          </ul>
        ) : (
          <ul className="ml-10 border-l-1 border-neutral-300 list-none">
            {workList[0].education.map((item, index) => {
              //I know index is not recommended for key just using it for this website
              return (
                <ListItem
                  key={index}
                  time={item.time}
                  place={item.place}
                  position={item.position}
                  task={item.task}
                  src={item.src}
                />
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Experience;
