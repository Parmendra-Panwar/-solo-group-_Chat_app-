import hero1 from "../../../assets/images/bich.jpg";
import hero2 from "../../../assets/images/clearBraid.jpg";
import hero3 from "../../../assets/images/handSake.jpg";
import React, { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  const images = [hero1, hero2, hero3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <button
          className={`${styles.arrow} ${styles.leftArrow}`}
          onClick={() =>
            setCurrentImage((currentImage - 1 + images.length) % images.length)
          }
        >
          &#8592;
        </button>
        <button
          className={`${styles.arrow} ${styles.rightArrow}`}
          onClick={() => setCurrentImage((currentImage + 1) % images.length)}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
