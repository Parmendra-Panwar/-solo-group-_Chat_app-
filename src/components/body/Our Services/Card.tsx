import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.service}>
      <div className={styles.imagee}>
        <img src="https://i.pinimg.com/736x/b5/07/cf/b507cf3cb7d6f4a54032e0dc1ce26f89.jpg" />
      </div>
      <div className={styles.datas}>
        <h3>Wedding Planning</h3>
        <p>
          From concept to execution, we'll make your wedding dreams come true.
        </p>
        <button>Know More</button>
      </div>
    </div>
  );
};

export default Card;
