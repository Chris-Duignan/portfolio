import React, { Suspense, useEffect, useState } from "react";
import useProjects from "@/hooks/useProjects";
import ProjectCard from "./ProjectCard";
import SecondaryTitle from "./typography/SecondaryTitle";

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { projects, err } = useProjects();
  const [page, setPage] = useState(1);
  const [currentProjects, setCurrentProjects] = useState(
    projects.slice(0, page * 2)
  );

  useEffect(() => {
    setCurrentProjects(projects.slice(0, page * 2));
  }, [projects, page]);

  const loadMoreProjects = () => {
    setPage((prev) => {
      return prev + 1;
    });
  };

  return (
    <div id="projects" className="border-b-2" ref={ref}>
      <SecondaryTitle style={'text-center pt-10'}>Projects</SecondaryTitle>
      {err ? <div>oh no</div> : null}
      <Suspense>
        {currentProjects.map((data, index) => {
          return (
              <ProjectCard
                record={data}
                isLast={index === currentProjects.length - 1}
                loadMoreProjects={loadMoreProjects}
                key={data.id}
              />
          );
        })}
      </Suspense>
    </div>
  );
});

Projects.displayName = "Projects";
export default Projects;
