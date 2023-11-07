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
    <div className="md:grid md:grid-cols-3 md:gap-4 h-screen">
      <aside className="border-b-2 md:col-span-1 md:grid md:grid-rows-3 md:border-r-2 md:border-b-0 md:pl-48 md:pt-44 md:pb-44 md:pr-10">
        <div>
          <PrimaryTitle>Chris Duignan</PrimaryTitle>
          <SecondaryTitle style={"text-left"}>
            Full Stack Software Engineer @ Northcoders
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
        className="md:col-span-2 text-justify overflow-y-auto md:py-44 md:pr-48 md:pl-16 scroll-smooth scroll-pt-44"
      >
        <AboutMe ref={sectionRefs.bio} />
        <TechStack ref={sectionRefs.tech} />
        <Projects ref={sectionRefs.projects} />
      </main>
    </div>
  );
}
