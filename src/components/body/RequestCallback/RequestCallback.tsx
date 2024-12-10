import React from "react";
import styles from "./RequestCallback.module.css";

const RequestCallback: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Personalized Assistance</h2>
        <h1 className={styles.subtitle}>REQUEST A CALL BACK</h1>
        <p className={styles.description}>
          Just a Call Away, Navigate Your Event Planning with Ease by Requesting
          a Callback
        </p>
      </div>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Name *"
          className={styles.input}
          required
        />
        <input
          type="tel"
          placeholder="Contact Number *"
          className={styles.input}
          required
        />
        <textarea
          placeholder="Message *"
          className={styles.textarea}
          required
        ></textarea>
        <button type="submit" className={styles.submitButton}>
          SUBMIT
        </button>
      </form>
      <button className={styles.quoteButton}>GET A QUOTE</button>
    </div>
  );
};

export default RequestCallback;
