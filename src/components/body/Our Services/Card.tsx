import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.service}>
      <img src={imageUrl} alt={title} />
      <div className={styles.datas}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button>Know More</button>
      </div>
    </div>
  );
};

export default Card;
