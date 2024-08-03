{/* eslint-disable react/no-unescaped-entities */}

import {getImageUrl} from "../../utils.js";
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container} id={"hero"}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mingyue Shao</h1>
        <p className={styles.description}>
          I am pursuing a master's degree in Electrical and Computer Engineering at University of Washington.
          Previously, I received my bachelor's and master's degree in Computer Science at Minzu University of China. I was a software development intern at Meituan.
          <br/>
          I am seeking summer internships and full-time opportunities for 2025.
          Reach out if you'd like to learn more.
        </p>
        <a className={styles.contactBtn} href={"mailto:smy1999@uw.edu"}>Contact Me</a>
      </div>
      <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")}
           alt={"Hero image of me"}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}