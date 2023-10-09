"use client";

import "./globals.css";
import AboutMe from "@/components/AboutMe";
import NavBar from "@/components/NavBar";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import PrimaryTitle from "@/components/typography/PrimaryTitle";
import SecondaryTitle from "@/components/typography/SecondaryTitle";
import useObserver from "@/hooks/useObserver";
import { Suspense, useRef } from "react";

export default function Home() {
  const sectionRefs = {
    bio: useRef(null),
    tech: useRef(null),
    projects: useRef(null),
  };
  const activeLink = useObserver(sectionRefs);

  return (
    <div className="grid grid-cols-3 gap-4 h-screen">
      <aside className="col-span-1 border-r-2 pl-48 pt-44 pr-10">
        <div>
          <PrimaryTitle>Chris Duignan</PrimaryTitle>
          <SecondaryTitle>Full Stack Software Engineer</SecondaryTitle>
        </div>
        <NavBar section={activeLink} />
      </aside>
      <main
        id="scrollArea"
        className="col-span-2 text-justify overflow-y-auto py-44 pr-48 pl-16 scroll-smooth scroll-pt-44"
      >
        <AboutMe ref={sectionRefs.bio} />
        <TechStack ref={sectionRefs.tech} />
        <Projects ref={sectionRefs.projects} />
      </main>
    </div>
  );
}
