import React from "react";
import Links from "./Links.jsx";
import Technologies from "./Technologies.jsx";

const Details = () => {
  console.log("Suppose to not show in terminal");

  return (
    <div className="flex mt-50 mb-20 flex-col items-center xl:flex-row justify-center">
      <div className="py-20 px-10 md:px-0 z-50 animate-fade-up">
        <main className=" w-full xl:w-[700px]">
          <div className="pl-2">
            <h2 className="text-xl text-gray-50 font-semibold md:text-xl lg:text-2xl font-roboto">
              Hello, I'm Juan
            </h2>
            <h1 className="text-2xl text-cyan-100 font-semibold md:text-3xl lg:text-4xl font-roboto my-1">
              Fullstack Developer
            </h1>
          </div>

          <div className="my-4 pl-2">
            <h2 className="text-l text-gray-50 font-thin md:text-l lg:text-xl font-roboto">
              I'm a 24-year-old who presses buttons on my keyboard
              <br />
              and makes things work on the internet.
            </h2>
          </div>

          <div className="pt-2 text-center">
            <div className="flex items-center gap-2">
              <h2 className="text-l text-gray-50 font-thin md:text-l lg:text-xl font-roboto"></h2>

              <Links
                link="https://www.linkedin.com/in/juan-west-113595297/"
                src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000"
              />
              <Links
                link="https://github.com/juanwestdev"
                src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
              />
              <Links
                link="https://mail.google.com/mail/u/2/#inbox?compose=CllgCJfnbjHmlfvcWtwKtXgTsvzJmNCvvRVDGpFxqkqmgRWzwrzZfrhdWjLdcSNJVTnDqpCzdgq"
                src="https://img.icons8.com/?size=100&id=85559&format=png&color=000000"
              />
            </div>
          </div>
        </main>
      </div>
      <Technologies />
    </div>
  );
};

export default Details;
