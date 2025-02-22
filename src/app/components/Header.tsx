import styles from "../../styles/header.module.css";
import React from "react";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Oseas Oliveira</h1>
      <h3>Desenvolvedor Fullstack Junior</h3>
      <p>Solution through code...</p>
      <nav>
        <ul className={styles.navList}>
          <li><a href="#about" className={styles.navLink}>Sobre</a></li>
          <li><a href="#experience" className={styles.navLink}>Experiência</a></li>
          <li><a href="#projects" className={styles.navLink}>Projetos</a></li>
        </ul>
      </nav>
    </header>
  );
}
