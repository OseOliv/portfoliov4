import styles from "../../styles/projects.module.css";
import Card from "./Card";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projetos</h2>
      <ul className={styles.projectList}>
        <li>
          <Card
            image="/assets/images/op.png"
            title="Projeto Alpha"
            description="Uma plataforma de ponta que revoluciona a gestão de tarefas com integração de IA."
            buttons={[
              { text: "GitHub", link: "https://github.com/project-alpha" },
              { text: "Live Demo", link: "https://project-alpha.com" },
            ]}
            techButtons={["React", "TypeScript", "CSS", "Node.js"]}
            imageWidth={150}
            imageHeight={130}
          />
        </li>
        <li>
          <Card
            image="/assets/images/op.png"
            title="Projeto Beta"
            description="Uma solução inovadora de e-commerce que oferece uma experiência de compra perfeita."
            buttons={[
              { text: "GitHub", link: "https://github.com/project-beta" },
              { text: "Live Demo", link: "https://project-beta.com" },
            ]}
            techButtons={["Vue", "JavaScript", "HTML", "Firebase"]}
            imageWidth={150}
            imageHeight={130}
          />
        </li>
        <li>
          <Card
            image="/assets/images/op.png"
            title="Projeto Gamma"
            description="Uma plataforma de mídia social que conecta usuários através de interesses e atividades compartilhadas."
            buttons={[
              { text: "GitHub", link: "https://github.com/project-gamma" },
              { text: "Live Demo", link: "https://project-gamma.com" },
            ]}
            techButtons={["Angular", "TypeScript", "SCSS", "MongoDB"]}
            imageWidth={150}
            imageHeight={130}
          />
        </li>
      </ul>
    </section>
  );
}
