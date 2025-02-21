import styles from "../../styles/projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <ul className={styles.projectList}>
        <li className={styles.projectItem}>
          <h3>Project 1</h3>
          <p>A web application that allows users to track their tasks and manage their time efficiently.</p>
        </li>
        <li className={styles.projectItem}>
          <h3>Project 2</h3>
          <p>An e-commerce platform that provides a seamless shopping experience with a variety of products.</p>
        </li>
        <li className={styles.projectItem}>
          <h3>Project 3</h3>
          <p>A social media app that connects people and allows them to share their experiences and ideas.</p>
        </li>
      </ul>
    </section>
  );
}
