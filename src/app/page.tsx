import "./globals.css";
import AboutMe from "../components/AboutMe";
import Container from "@/components/Container";
import NavBar from "@/components/NavBar";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4 h-screen">
      <div className="col-span-1 border-r-2 pl-60 pt-44">
        <div>
          <h1 className="text-3xl">Chris Duignan</h1>
          <h2 className="text-xl">Full Stack Software Engineer</h2>
        </div>
        <NavBar />
      </div>
      <div className='col-span-2 text-justify overflow-y-auto py-44 pr-60 pl-16'>
        <AboutMe />
        <TechStack />
        <Projects />
      </div>
    </div>
  );
}
