import React from "react";
import styles from "./EvokeEventPlanners.module.css";

const EvokeEventPlanners: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageSection}>
        <img
          src="https://st4.depositphotos.com/1022135/20764/i/450/depositphotos_207645486-stock-photo-young-wedding-couple-vatican-rome.jpg"
          alt="Wedding Couple"
          className={styles.image}
        />
        <img
          src="https://images.pexels.com/photos/27039582/pexels-photo-27039582/free-photo-of-newlyweds-standing-together.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Event Setup"
          className={styles.image}
        />
      </div>
      <div className={styles.textSection}>
        <h1 className={styles.heading}>
          <span className={styles.welcome}>Welcome to</span>
          <br />
          THE DREAM WEDDING & EVENT PLANNERS
        </h1>
        <p className={styles.paragraph}>
          At The Dream Wedding & Event Planners, we understand that every event
          is a once-in-a-lifetime moment. We take pride in bringing your dream
          celebrations to life with personalized planning and impeccable
          execution. Whether it's a wedding, corporate event, or private party,
          our expert team works tirelessly to create an unforgettable experience
          tailored to your vision.
        </p>
        <p className={styles.paragraph}>
          Our skilled professionals specialize in coordinating every detail,
          from venue selection and decor design to entertainment and catering.
          Trust us to handle everything, so you can focus on enjoying your
          event.
        </p>
        <button className={styles.button}>KNOW MORE</button>
      </div>
    </section>
  );
};

export default EvokeEventPlanners;
