import styles from "../../styles/footer.module.css";
import React from "react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 Oseas. All rights reserved.</p>
      <div className={styles.socials}>
        <a href="https://github.com/oseoliv" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
        <a href="https://linkedin.com/in/oseoliveira" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
        <a href="mailto:johndoe@example.com" className={styles.socialLink}>Email</a>
      </div>
    </footer>
  );
}
