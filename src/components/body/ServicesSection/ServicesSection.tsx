import React from "react";
import styles from "./ServicesSection.module.css";

const ServicesSection: React.FC = () => {
  return (
    <section className={styles.services}>
      <div className={styles.gullu}>
        <h2>
          SIGNATURE CELEBRATIONS IN BHOPAL: EXPLORE OUR KEY EVENT SERVICES
        </h2>
        <p>
          Elevating celebrations with signature services. Impeccable
          hospitality, stunning venues, impressive decoration & concepts, and
          many more for creating unforgettable moments.
        </p>
        <button className={styles.callNow}>CALL NOW</button>
      </div>
      <div className={styles.servicesList}>
        {[
          "Best Event Planners in Bhopal",
          "Best Wedding Planners in Bhopal",
          "Corporate Event Management in Bhopal",
          "Wedding Decoration in Bhopal",
          "RSVP & Guest Management in Bhopal",
        ].map((service, index) => (
          <div key={index} className={styles.service}>
            ✓ {service}
          </div>
        ))}
      </div>
      <div className={styles.servicesList}>
        {[
          "Event Logistics Management in Bhopal",
          "Complete Wedding Package in Bhopal",
          "Event Planning & Designing Company in Bhopal",
          "Hospitality Management in Bhopal",
          "Theme Wedding Decoration in Bhopal",
        ].map((service, index) => (
          <div key={index} className={styles.service}>
            ✓ {service}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
