import React from "react";
import styles from "./WhyChooseUsSection.module.css";

const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    "Professional Expertise",
    "Tailored Services",
    "Vendor Relationships",
    "Attention to Detail",
    "Cost-Effective Solutions",
    "Seamless Planning",
    "Creative Concepts",
    "Timely Execution",
  ];

  return (
    <section className={styles.whyChooseUs}>
      <h2>Why Choose Us?</h2>
      <div className={styles.container}>
        {/* Center Image */}
        <div className={styles.centerImage}>
          <img
            className={styles.iimmage}
            src="https://res.cloudinary.com/evoke-insignia/images/f_auto,q_auto/v1705410469/600x827-Why-Choose-Us/600x827-Why-Choose-Us.png?_i=AA"
            alt="Center"
          />
        </div>

        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`${styles.reason} ${styles[`position${index + 1}`]}`}
          >
            <p>{reason}</p>
          </div>
        ))}
      </div>
      <p className={styles.signature}>Your Signature Celebrations Await...</p>
    </section>
  );
};

export default WhyChooseUsSection;
