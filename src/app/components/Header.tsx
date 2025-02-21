import styles from "../../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>John Doe&apos;s Portfolio</h1>
      <nav>
        <ul className={styles.navList}>
          <li><a href="#about" className={styles.navLink}>About</a></li>
          <li><a href="#experience" className={styles.navLink}>Experience</a></li>
          <li><a href="#projects" className={styles.navLink}>Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}
