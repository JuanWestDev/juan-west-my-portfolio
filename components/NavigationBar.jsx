import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu.jsx";

const NavigationBar = (props) => {
  return (
    <div className=" flex md:w-[2000px] justify-center py-2 backdrop-blur-md">
      <div className=" flex justify-between items-center w-[900px] xl:w-[1168px] max-w-[1168px] pt-2 pl-10 pr-10 ">
        <div className="flex items-center gap-2">
          <div className="relative inline-block w-10 h-10 md:w-15 md:h-15 ">
            <img
              alt="Juan West"
              src="JuanWest.jpg"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className=" tranisition-transform duration-500 hover:scale-125 hover:-rotate-12  rounded-full  absolute h-full w-full inset-0 object-cover text-transparent object-[center_25%] "
            />
          </div>
          <h1 className="text-gray-50 text-xs sm:text-sm leading-5">
            <span className="font-roboto">Juan van der Westhuizen</span>
            <br />
            <span className="text-xs">
              <img
                alt="RSA Flag"
                src="za-flag.png"
                width="20"
                height="20"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="inline-block mr-1 -mt-1"
              />
              <span className="font-roboto">Based in South Africa</span>
            </span>
          </h1>
        </div>

        <div className="text-gray-50">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
                width="25"
                height="25"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="filter invert"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={props.home}>Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={props.about}>About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={props.projects}>Projects</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ul className="relative hidden sm:grid grid-cols-4 items-center justify-center py-2 rounded-full mx-2 md:mx-0 ">
            <li className="relative z-10 px-2 md:px-4 text-center py-2 rounded-full cursor-pointer  hover:text-cyan-100 text-neutral-300">
              <Link href={props.home}>Home</Link>
            </li>

            <li className="relative z-10 px-2 md:px-4 text-center py-2 rounded-full cursor-pointer  hover:text-cyan-100 text-neutral-300">
              <Link href={props.about}>About</Link>
            </li>

            <li className="relative z-10 px-2 md:px-4 text-center py-2 rounded-full cursor-pointer  hover:text-cyan-100 text-neutral-300">
              <Link href={props.projects}>Projects</Link>
            </li>

            <li className="relative z-10 px-2 md:px-4 text-center py-2 rounded-full cursor-pointer  hover:text-cyan-100 text-neutral-300">
              <a
                href="https://mail.google.com/mail/u/2/#inbox?compose=CllgCJfnbjHmlfvcWtwKtXgTsvzJmNCvvRVDGpFxqkqmgRWzwrzZfrhdWjLdcSNJVTnDqpCzdgq"
                target="_blank"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
