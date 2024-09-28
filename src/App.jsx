// import { useState } from 'react'
import styles from './App.module.css'
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {Hero} from "./components/Hero/Hero.jsx";
import {About} from "./components/About/About.jsx";
import {Experience} from "./components/Experience/Experience.jsx";
import {Projects} from "./components/Projects/Projects.jsx";
import {Contact} from "./components/Contact/Contact.jsx";
import {useEffect, useState} from "react";

function App() {


  const [project, setProject] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    console.log(111); // 确保这个打印在控制台中可见
    try {
      const response = await fetch('/api/getData');
      const data = await response.json();
      console.log(1);
      console.log(data); // 这里会返回 MongoDB 的数据
      setProject(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects data={project}/>
      <Contact/>
    </div>
  )
}

export default App
