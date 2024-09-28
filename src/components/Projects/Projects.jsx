import styles from "./Projects.module.css";
import {ProjectCard} from "./ProjectCard.jsx";

export const Projects = (data) => {
  const {projects} = data;
  return (
    <section className={styles.container} id={"projects"}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>{
        projects.map((project, id) =>
          <ProjectCard project={project} key={id}/>
        )
      }</div>
    </section>
  );
}