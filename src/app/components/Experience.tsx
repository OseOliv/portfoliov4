import React from "react";
import styles from "../../styles/experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <h2>Experiência</h2>
      <ul className={styles.experienceList}>
        <li className={styles.experienceItem}>
          <div className={styles.experienceHeader}>
            <h3>Desenvolvedor Fullstack Junior - Ayabese</h3>
          </div>
          <p>
            Na Ayabese, startup especializada em consultoria e soluções de
            desenvolvimento, atuo na criação e manutenção de sistemas que
            impulsionam a transformação digital dos nossos clientes.
          </p>
          <span>Ago 2020 - Presente</span>

          <div className={styles.experienceSubItem}>
            <h4>AfroSaúde</h4>
            <p>
              <a
                href="https://afrosaude.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                afrosaude.com.br
              </a>
            </p>
            <p>
              Dentro do escopo de atuação para a AfroSaúde, empresa de
              teleatendimento focada em saúde mental, sou responsável por
              desenvolver e aprimorar aplicações que melhoram a experiência do
              usuário e otimizam os processos internos, contribuindo para um
              atendimento mais eficiente e humanizado.
            </p>
            <span>Set 2020 - Presente</span>
            <div className={styles.techTags}>
              <div className={styles.techTag}>Angular</div>
              <div className={styles.techTag}>TypeScript</div>
              <div className={styles.techTag}>NestJS</div>
              <div className={styles.techTag}>Firebase</div>
              <div className={styles.techTag}>Node.js</div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
