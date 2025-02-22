import styles from "../styles/page.module.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <main className={styles.main}>
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
