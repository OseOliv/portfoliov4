import styles from "../../styles/card.module.css";
import Image from 'next/image';

interface CardProps {
  image: string;
  title: string;
  description: string;
  buttons: { text: string; link: string }[];
  techButtons: string[];
  imageWidth?: number;
  imageHeight?: number;
}

export default function Card({ image, title, description, buttons, techButtons, imageWidth = 300, imageHeight = 150 }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage} style={{ width: imageWidth, height: imageHeight }}>
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardButtons}>
          {buttons.map((button, index) => (
            <a key={index} href={button.link} className={styles.cardButton}>
              {button.text}
            </a>
          ))}
        </div>
        <div className={styles.cardTechButtons}>
          {techButtons.map((tech, index) => (
            <span key={index} className={styles.cardTechButton}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
