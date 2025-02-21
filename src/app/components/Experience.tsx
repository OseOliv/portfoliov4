import React from "react";
import styles from "../../styles/experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <h2>Experience</h2>
      <ul className={styles.experienceList}>
        <li className={styles.experienceItem}>
          <h3>Software Developer at Company A</h3>
          <p>Developed and maintained web applications using React and Node.js.</p>
          <span>Jan 2020 - Present</span>
        </li>
        <li className={styles.experienceItem}>
          <h3>Frontend Developer at Company B</h3>
          <p>Created responsive user interfaces with HTML, CSS, and JavaScript.</p>
          <span>Jun 2018 - Dec 2019</span>
        </li>
        <li className={styles.experienceItem}>
          <h3>Intern at Company C</h3>
          <p>Assisted in the development of internal tools and applications.</p>
          <span>Jan 2017 - May 2018</span>
        </li>
      </ul>
    </section>
  );
}
