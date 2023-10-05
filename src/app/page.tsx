"use client";

import "./globals.css";
import AboutMe from "@/components/AboutMe";
import NavBar from "@/components/NavBar";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import PrimaryTitle from "@/components/typography/PrimaryTitle";
import SecondaryTitle from "@/components/typography/SecondaryTitle";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("#bio, #tech, #projects");

    const options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "-25% 0px -74% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      console.log(entries)
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          setCurrentSection(entry.target.getAttribute("id") ?? '');
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, [currentSection]);

  return (
    <div className="grid grid-cols-3 gap-4 h-screen">
      <aside className="col-span-1 border-r-2 pl-48 pt-44 pr-10">
        <div>
          <PrimaryTitle>Chris Duignan</PrimaryTitle>
          <SecondaryTitle>Full Stack Software Engineer</SecondaryTitle>
        </div>
        <NavBar section={currentSection} />
      </aside>
      <main id="scrollArea" className="col-span-2 text-justify overflow-y-auto py-44 pr-48 pl-16 scroll-smooth scroll-pt-44">
        <AboutMe />
        <TechStack />
        <Projects />
      </main>
    </div>
  );
}
