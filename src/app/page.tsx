"use client";

import "./globals.css";
import AboutMe from "@/components/AboutMe";
import NavBar from "@/components/NavBar";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import PrimaryTitle from "@/components/typography/PrimaryTitle";
import SecondaryTitle from "@/components/typography/SecondaryTitle";
import useObserver from "@/hooks/useObserver";
import { useRef } from "react";
import Image from "next/image";
import githubIcon from '../../public/github-mark-white.svg'
import linkedInIcon from '../../public/linked_in_icon.png'

export default function Home() {
  const sectionRefs = {
    bio: useRef(null),
    tech: useRef(null),
    projects: useRef(null),
  };
  const activeLink = useObserver(sectionRefs);

  return (
    <div className="grid grid-cols-3 gap-4 h-screen">
      <aside className="col-span-1 grid grid-rows-3 border-r-2 pl-48 pt-44 pb-44 pr-10">
        <div>
          <PrimaryTitle>Chris Duignan</PrimaryTitle>
          <SecondaryTitle style={"text-left"}>
            Full Stack Software Engineer
          </SecondaryTitle>
        </div>
        <NavBar section={activeLink} />
        <div className="flex items-end">
          <a href="https://github.com/Chris-Duignan" target="_blank">
            <Image
              src={githubIcon}
              alt=""
              style={{
                margin: '5px',
                width: '30px',
                height: 'auto'
              }}
            ></Image>
          </a>
          <a href="https://www.linkedin.com/in/chris-duignan-142963175/" target="_blank">
            <Image
              src={linkedInIcon}
              alt=""
              style={{
                margin: '5px',
                width: '30px',
                height: 'auto'
              }}
            ></Image>
          </a>
        </div>
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
