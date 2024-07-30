{/* eslint-disable react/no-unescaped-entities */}

import {getImageUrl} from "../../utils.js";
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mingyue</h1>
        <p className={styles.description}>I'm a full-stack developer with 2 years of experience using Java and React. Reach out if you'd like to learn more.</p>
        <a className={styles.contactBtn} href={"mailto:smy19990312@gmail.com"}>Contact Me</a>
      </div>
      <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")}
           alt={"Hero image of me"}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}