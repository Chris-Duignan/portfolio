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
    <div className="lg:grid lg:grid-cols-3 lg:gap-4 h-screen">
      <aside className="border-b-2 lg:col-span-1 lg:grid lg:grid-rows-3 lg:border-r-2 lg:border-b-0 lg:pl-48 lg:pt-44 lg:pb-44 lg:pr-10">
        <div className="lg:flex lg:flex-col lg:h-fill lg:justify-between">
          <div>
          <PrimaryTitle>Chris Duignan</PrimaryTitle>
          <SecondaryTitle style={"text-left hidden lg:block"}>
            Full Stack Software Engineer
          </SecondaryTitle>
          </div>
        </div>
        <NavBar section={activeLink} />
        <div className="items-end hidden h-0 w-0 lg:flex lg:w-[70px] lg:h-[75px]">
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
        className="lg:col-span-2 text-justify overflow-y-auto lg:py-44 lg:pr-48 lg:pl-16 scroll-smooth scroll-pt-44"
      >
        <AboutMe ref={sectionRefs.bio} />
        <TechStack ref={sectionRefs.tech} />
        <Projects ref={sectionRefs.projects} />
      </main>
    </div>
  );
}
