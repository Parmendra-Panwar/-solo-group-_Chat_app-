import Card from "./Card";
import styles from "./OurServices.module.css";

const OurServices = () => {
  return (
    <div className={styles.services}>
      <h4>Crafting Dream Events with Precision and Passion</h4>
      <div>
        <h1>Our Services</h1>
        <hr />
      </div>
      <p>
        At Evoke Event & Wedding Planners, We specialize in seamless event
        management services. From meticulous wedding planning and exquisite
        decorations, corporate events to expert guest management and hospitality
        in Bhopal and Indore, our team ensures your special occasions are
        flawlessly executed. Trust us for unparalleled professionalism and
        unforgettable events.
      </p>
      <div className={styles.servicesContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default OurServices;
