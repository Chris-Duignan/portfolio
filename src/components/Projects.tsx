import React, { Suspense, useEffect, useState } from "react";
import useProjects from "@/hooks/useProjects";
import ProjectCard from "./ProjectCard";
import SecondaryTitle from "./typography/SecondaryTitle";
import Loading from "./Loading";

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { projects, err, loading } = useProjects();

  return (
    <div id="projects" className="border-b-2" ref={ref}>
      <SecondaryTitle style={'text-center pt-10'}>Projects</SecondaryTitle>
      {loading ? <Loading/> : null}
      {err ? <div>Projects not found. Try again later</div> : null}
        {projects.map((data, index) => {
          return (
              <ProjectCard
                record={data}
                isLast={index === projects.length - 1}
                key={data.name}
              />
          );
        })}
    </div>
  );
});

Projects.displayName = "Projects";
export default Projects;
