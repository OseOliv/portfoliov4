import styles from "../styles/page.module.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience"; 
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <About />
        <Experience /> 
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
