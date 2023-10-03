import projects from '../styles/projects.module.css'
import Carousel from "./Carousel";

const Projects = async () => {
  return (
    <div className={`${projects.projects__container}`}>
      <Carousel />
    </div>
  );
};

export default Projects;
