import Link from "next/link";

const Footer = (props) => {
  const year = new Date().getFullYear();

  return (
    <div className=" flex justify-between gap-5 sm:w-[900px] xl:w-[1200px] max-w-[1200px] pl-10 pt-2 pr-10 ">
      <div className="flex flex-col justify-center">
        <div className="flex flex-row items-center gap-2">
          <h1 className=" text-xl sm:text-4xl font-neuehaas">Juan West </h1>
        </div>
        <div className="flex self-baseline">
          <p className="text-xs text-white opacity-30">©{year}</p>
        </div>
      </div>

      <div className="flex gap-6">
        <div>
          <h1 className="text-sm sm:text-lg font-semibold">Explore</h1>
          <ul className="mt-2 pl-0 sm:pl-0.5 text-xs sm:text-lg font-thin">
            <li className="text-sm">
              <Link href={props.home}>Home</Link>
            </li>
            <li className="text-sm">
              <Link href={props.about}>About</Link>
            </li>
            <li className="text-sm">
              <Link href={props.projects}>Projects</Link>
            </li>
            <li className="text-sm">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className=" text-sm sm:text-lg font-semibold">Connect</h1>
          <ul className="mt-2 pl-0 sm:pl-0.5  text-xs sm:text-lg font-thin">
            <li className="text-sm">
              <Link href="mailto:juanwestworks@gmail.com">Email</Link>
            </li>
            <li className="text-sm">
              <Link href="https://github.com/juanwestdev">Github</Link>
            </li>
            <li className="text-sm">
              <Link href="https://www.linkedin.com/in/juan-west-113595297/">
                LinkedIn
              </Link>
            </li>
            <li className="text-sm">
              <Link href="https://www.instagram.com/juanwestthings/#">
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
