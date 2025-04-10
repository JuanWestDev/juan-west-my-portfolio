import React from "react";

const ListProjects = (props) => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap gap-10">
      <div className="flex-grow">
        <a
          href={props.web}
          target="_blank"
          className="border border-neutral-300 rounded-lg flex flex-col justify-between hover:-translate-y-2 transition ease-in-out duration-300"
        >
          <img
            alt=""
            className=" w-full md:w-[390px] max-w-[390px] h-53 object-fill rounded-xl"
            src={props.src}
          />
        </a>
      </div>

      <div className="p-2 flex-grow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg text-gray-50 font-roboto">{props.name}</h3>
        </div>

        <p className="text-neutral-400 text-sm mb-4 font-roboto">{props.des}</p>

        <div className="flex items-center mb-4">
          <p className="text-neutral-400 text-sm hover:text-neutral-300 transition">
            For
          </p>
          <img
            alt={props.web}
            className="w-6 h-6 mx-2"
            src={props.companyImg}
          />
          <a
            href="/"
            className="text-neutral-300 text-sm hover:underline transition"
            aria-label={`Visit ${props.companyName} website`}
          >
            {props.companyName}
          </a>
        </div>

        <div className="p-2">
          <div className="flex flex-wrap gap-1">
            {props.languages && props.languages.length > 0 ? (
              props.languages.map((lang, index) => (
                <span
                  key={index + 1}
                  className="bg-neutral-200 text-black px-2 py-1 rounded-md text-xs mr-1"
                >
                  {lang}
                </span>
              ))
            ) : (
              <span className="bg-neutral-200 text-black px-2 py-1 rounded-md text-xs">
                No languages
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProjects;
