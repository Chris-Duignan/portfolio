"use client";

import ProjectCard from "./ProjectCard";
import useProjects from "@/hooks/useProjects";

const Carousel = () => {
  const { projects, index, updateIndex, isLoading, err } = useProjects();

  if (isLoading) return <div>Loading...</div>;
  if (err) return <div>Oh No</div>;
  return (
    <div>
      <ProjectCard record={projects[index]} />
    </div>
  );
};

export default Carousel;
