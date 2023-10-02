import styles from "../app/page.module.css";
import projects from '../styles/projects.module.css'
import Carousel from "./Carousel";

const Projects = async () => {
  return (
    <div className={`${styles.container} ${projects.projects__container}`}>
      <h2>Projects</h2>
      <Carousel />
    </div>
  );
};

export default Projects;
