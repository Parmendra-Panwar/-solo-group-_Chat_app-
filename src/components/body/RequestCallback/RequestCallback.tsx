import React, { useRef } from "react";
import styles from "./RequestCallback.module.css";

const RequestCallback: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const contactNumberRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    const name = nameRef.current?.value;
    const contactNumber = contactNumberRef.current?.value;
    const message = messageRef.current?.value;

    if (name && contactNumber && message) {
      // Create the mailto link with the form data
      const mailtoLink = `mailto:panwparmendra7@gmail.com?subject=Request%20Callback&body=Name: ${encodeURIComponent(
        name
      )}%0D%0AContact%20Number: ${encodeURIComponent(
        contactNumber
      )}%0D%0AMessage: ${encodeURIComponent(message)}`;

      // Redirect to the mailto link, opening the user's email client
      window.location.href = mailtoLink;
    } else {
      alert("Please fill in all the fields.");
    }
  };

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
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name *"
          className={styles.input}
          ref={nameRef}
          required
        />
        <input
          type="tel"
          placeholder="Contact Number *"
          className={styles.input}
          ref={contactNumberRef}
          required
        />
        <textarea
          placeholder="Message *"
          className={styles.textarea}
          ref={messageRef}
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
