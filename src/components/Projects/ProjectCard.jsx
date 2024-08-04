import styles from "./ProjectCard.module.css";
import {getImageUrl} from "../../utils.js";
import PropTypes from "prop-types";

export const ProjectCard = ({project}) => {



  const {title, imageSrc, description, skills, demo, source} = project

  return (
    <div className={styles.container}>
      <img src={getImageUrl(imageSrc)}
           alt={`Image of ${title}`}
           className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>{
          skills.map((skill, id) =>
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          )
        }</ul>
        <div className={styles.links}>
          <a href={demo} className={styles.link} target={"_blank"}>Demo</a>
          <a href={source} className={styles.link} target={"_blank"}>Source</a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
};