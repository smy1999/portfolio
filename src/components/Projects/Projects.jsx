import styles from "./Projects.module.css";
import projects from "../../data/projects.json"
import {ProjectCard} from "./ProjectCard.jsx";
export const Projects = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>{
        projects.map((project, id) =>
          <ProjectCard project={project} key={id}/>
        )
      }</div>
    </section>
  );
}