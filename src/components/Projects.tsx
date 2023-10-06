import React from "react";
import Carousel from "./Carousel";

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div id="projects" ref={ref}>
      <Carousel />
    </div>
  );
});

export default Projects;
