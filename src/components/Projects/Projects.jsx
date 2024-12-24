import styles from "./Projects.module.css";
import {ProjectCard} from "./ProjectCard.jsx";
import {useEffect, useState} from "react";
import {get} from "../../utils.js";

export const Projects = () => {

  const [projects, setProjects] = useState([])

  const getProjects = async () => {
    try {
      const response = await get('/projects');

      if (response.body) {
        const data = JSON.parse(response.body);
        const mappedProjects = data.projects.map(project => ({
          ...project,
          imageSrc: project.image_src
        }));
        mappedProjects.sort((a, b) => a.id - +b.id)
        setProjects(mappedProjects);
      } else {
        console.error('Response body is undefined');
      }
    } catch (error) {
      console.error('Error fetching skills:', error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

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