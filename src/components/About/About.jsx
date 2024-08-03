/* eslint-disable react/no-unescaped-entities */
import styles from './About.module.css'
import {getImageUrl} from "../../utils.js";

export const About = () => {

  return (
    <section className={styles.container} id={"about"}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage}
             alt={"Me sitting with a laptop"}
             src={getImageUrl("about/aboutImage-me-circle.png")}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className={styles.aboutItemImg}
                 alt={"Server icon"}
                 src={getImageUrl("about/serverIcon.png")}
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimized back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.aboutItemImg}
                 alt={"Cursor icon"}
                 src={getImageUrl("about/cursorIcon.png")}
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a front-end developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.aboutItemImg}
                 alt={"Ui icon"}
                 src={getImageUrl("about/uiIcon.png")}
            />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning Engineer</h3>
              <p>
                I specialize in the training and implementation of high-performance
                models as a machine learning engineer.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}