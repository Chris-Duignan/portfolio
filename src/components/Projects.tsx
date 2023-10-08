import React, { Suspense, useEffect, useRef } from "react";
import useProjects from "@/hooks/useProjects";
import ProjectCard from "./ProjectCard";

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { currentProjects, allCollected, setNextPage, err } = useProjects();

  useEffect(() => {

    if (!allCollected) {
      const observer = new IntersectionObserver((entries) => {
        const lastCard = entries[0]
  
        if (!lastCard.isIntersecting) return;
        setNextPage()
        observer.unobserve(lastCard.target)
        if (!allCollected) observer.observe(document.querySelector('.card:last-child')!)
      }, {threshold: 1});
  
      if (document.querySelector('.card:last-child')) observer.observe(document.querySelector('.card:last-child')!)
      return () => {
        observer.disconnect()
      }
    }

  }, [setNextPage, allCollected]);

  return (
    <div id="projects" ref={ref}>
      {err ? <div>oh no</div> : null}
      {currentProjects.map((data) => {
        return (
          <Suspense
            key={data.id}
            fallback={<div className="text-gray-50">Loading...</div>}
          >
            <ProjectCard
              record={data}
              key={data.id}
            />
          </Suspense>
        );
      })}
    </div>
  );
});

Projects.displayName = "Projects";
export default Projects;
