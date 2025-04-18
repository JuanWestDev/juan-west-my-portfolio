import React from "react";
import TopSection from "@/components/TopSection";
import Technologies from "@/components/Technologies";

// const About = () => {
//   console.log("What am I doing here?(About) -- SERVER/CLIENT");

//   return (
//     <>
//       <TopSection
//         title="About"
//         desc="  I'm a fullstack developer who fell in love with web development and enjoy
//         making a clean user experience. I love a challenge and am willing to
//         learn anything necessary to get the job done."
//       />
//       <Technologies />
//     </>
//   );
// };

// export default About;

export default function About() {
  return (
    <>
      <TopSection
        title="About"
        desc="  I'm a fullstack developer who fell in love with web development and enjoy
            making a clean user experience. I love a challenge and am willing to
            learn anything necessary to get the job done."
      />
      <Technologies />
    </>
  );
}
