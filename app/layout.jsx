import React from "react";
import { Roboto } from "next/font/google";
import GradientTopSection from "@/components/GradientTopSection";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
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
    <html lang="en">
      <body className={`${roboto.variable} antialiased  bg-black`}>
        <main className="min-h-screen flex flex-col items-center bg-black relative overflow-hidden">
          <header className="fixed left-1/2 z-[900] -translate-x-1/2 w-full md:w-auto">
            <NavigationBar home="/" about="/about" projects="/projects" />
          </header>
          <GradientTopSection />
          {children}
          <section className="mt-15 mb-5 border-[1.5px] rounded-full bg-neutral-800 border-neutral-800 opacity-60 mx-auto animate-grow-size ease-out"></section>
          <footer className=" mx-auto pb-10 container w-full md:w-auto text-neutral-300 px-4 md:px-0 z-50 animate-fade-up">
            <Footer home="/" about="/about" projects="/projects" />
          </footer>
        </main>
      </body>
    </html>
  );
}
