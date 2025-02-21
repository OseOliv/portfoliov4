import styles from "../../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 John Doe. All rights reserved.</p>
      <div className={styles.socials}>
        <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
        <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
        <a href="mailto:johndoe@example.com" className={styles.socialLink}>Email</a>
      </div>
    </footer>
  );
}
