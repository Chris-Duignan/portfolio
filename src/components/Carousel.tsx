"use client";

import ProjectCard from "./ProjectCard";
import carouselStyles from "../styles/carousel.module.css";
import useProjects from "@/hooks/useProjects";

const Carousel = () => {
  const { projects, index, updateIndex, isLoading, err } = useProjects();

  if (isLoading) return <div>Loading...</div>;
  if (err) return <div>Oh No</div>;
  return (
    <div className={carouselStyles.container}>
      <ProjectCard record={projects[index]} />
      <div>
        <button
          className={`${carouselStyles.button} ${carouselStyles.left}`}
          onClick={() => updateIndex(-1)}
        >
          <div className={`${carouselStyles.arrow} ${carouselStyles.leftPoint}`}></div>
        </button>
        <button
          className={`${carouselStyles.button} ${carouselStyles.right}`}
          onClick={() => updateIndex(1)}
        >
          <div className={`${carouselStyles.arrow} ${carouselStyles.rightPoint}`}></div>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
