{/* eslint-disable react/no-unescaped-entities */}

import {getImageUrl} from "../../utils.js";
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container} id={"hero"}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mingyue Shao</h1>
        <p className={styles.description}>
          I am currently pursuing a master's degree in Electrical and Computer Engineering at the University of
          Washington.
          Previously, I earned both my bachelor's and master's degrees in Computer Science from Minzu University of
          China.
          I was also a software development intern at Meituan.
          <br/>
          This coming summer and fall, I will be joining Meta and Amazon.
          <br/>
          I am actively seeking full-time opportunities for 2026.
          Feel free to reach out if you'd like to connect!
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