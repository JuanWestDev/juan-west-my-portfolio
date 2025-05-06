import Footer from "@/app/components/Footer";
import GradientBottomLeft from "@/app/components/GradientBottomLeft";
import GradientBottomMiddleLeft from "@/app/components/GradientBottomMiddleLeft";
import GradientBottomMiddleRight from "@/app/components/GradientBottomMiddleRight";
import GradientBottomRight from "@/app/components/GradientBottomRight";
import GradientTopLeft from "@/app/components/GradientTopLeft";
import GradientTopRight from "@/app/components/GradientTopRight";
import GradientTopSection from "@/app/components/GradientTopSection";
import LenisWrapper from "@/app/components/LenisWrapper";
import NavigationBar from "@/app/components/NavigationBar";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["greek"],
});

export const metadata = {
  title: "Juan West",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-pt-16">
      <body className={`${roboto.variable} antialiased  bg-black`}>
        <LenisWrapper>
          <main className="min-h-screen flex flex-col items-center bg-black relative overflow-hidden ">
            <header className="fixed left-1/2 z-[900] -translate-x-1/2 w-full md:w-auto">
              <NavigationBar home="/" about="/about" projects="/projects" />
            </header>
            <GradientTopSection />
            <GradientTopRight />
            <GradientTopLeft />
            <GradientBottomRight />
            <GradientBottomLeft />
            <GradientBottomLeft />
            <GradientBottomMiddleRight />
            <GradientBottomMiddleLeft />
            <GradientBottomRight />
            {children}
            <section className="mt-15 mb-5 border-[1.5px] rounded-full bg-neutral-800 border-neutral-800 opacity-60 mx-auto "></section>
            <footer className=" mx-auto pb-10 container w-full md:w-auto text-neutral-300 px-4 md:px-0 z-50 animate-fade-up">
              <Footer home="/" about="/about" projects="/projects" />
            </footer>
          </main>
        </LenisWrapper>
      </body>
    </html>
  );
}
