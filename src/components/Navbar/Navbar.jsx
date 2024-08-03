import {useState} from "react";
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils";


export const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href={"/"}>Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn}
          // 获取图像链接, 中括号内表示是函数执行
             src={menuOpen
               ? getImageUrl("nav/closeIcon.png")
               : getImageUrl("nav/menuIcon.png")}
          // 图标的替代文本
             alt={"menu-button"}
             onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(!menuOpen)}>
          <li>
            <a href={"#about"}>About</a>
          </li>
          <li>
            <a href={"#experience"}>Experience</a>
          </li>
          <li>
            <a href={"#projects"}>Projects</a>
          </li>
          <li>
            <a href={"#contact"}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}