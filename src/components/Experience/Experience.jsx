import styles from './Experience.module.css';
import history from '../../data/history.json'
import {get, getImageUrl} from "../../utils.js";
import {useEffect, useState} from "react";


export const Experience = () => {


  const [skills, setSkills] = useState([])

  useEffect(() => {
    const getSkills = async () => {
      try {
        const response = await get('/skills');
        console.log(2)
        console.log(response);

        if (response.body) {
          const data = JSON.parse(response.body);
          console.log(data);
          setSkills(data.skills);
        } else {
          console.error('Response body is undefined');
        }
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    getSkills();
  }, []);

  return (
    <section className={styles.container} id={"experience"}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>{
          skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)}
                       alt={skill.title}/>
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })
        }
        </div>
        <ul className={styles.history}>{
          history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.historyItemTitle}>
                  <img src={getImageUrl(historyItem.imageSrc)}
                       alt={`${historyItem.organisation} Logo`}/>
                  <div className={styles.historyItemTitleContent}>
                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  </div>
                </div>
                <ul>{
                  historyItem.experiences.map((e, id) => {
                    return (
                      <li key={id}>{e}</li>
                    )
                  })
                }</ul>
              </li>
            )
          })
        }</ul>
      </div>
    </section>
  );
}