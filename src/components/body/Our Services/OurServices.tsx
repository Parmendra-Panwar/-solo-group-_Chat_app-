import React from "react";
import Card from "./Card";
import styles from "./OurServices.module.css";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

const services: Service[] = [
  {
    title: "Wedding Planning & Management",
    description:
      "From concept to execution, we'll make your wedding dreams come true.",
    imageUrl:
      "https://i.pinimg.com/736x/b5/07/cf/b507cf3cb7d6f4a54032e0dc1ce26f89.jpg",
  },
  {
    title: "Corporate Event Management",
    description: "Professional management for successful corporate events.",
    imageUrl:
      "https://media.licdn.com/dms/image/D5612AQF86FEW-FKjfw/article-cover_image-shrink_720_1280/0/1715053782021?e=2147483647&v=beta&t=4jOhzAyuwYkjmE5-8yZrIsgvVP-bSP07k-v8Igp9Ax0",
  },
  {
    title: "Hospitality & Guest Management",
    description: "Expert handling of guests to ensure a seamless experience.",
    imageUrl:
      "https://5357741.fs1.hubspotusercontent-na1.net/hubfs/5357741/woman-giving-key-to-customer-1.jpg",
  },
  {
    title: "Wedding Decor & Designs",
    description: "Beautiful and bespoke decor tailored to your style.",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/027/718/473/non_2x/wedding-couple-in-love-in-flower-arch-generative-ai-photo.jpg",
  },
  {
    title: "Concerts & Live Shows",
    description: "Memorable events with professional organization.",
    imageUrl:
      "https://content.jdmagicbox.com/v2/comp/bhopal/s5/0755px755.x755.171228204006.b6s5/catalogue/soofyan-band-nehru-nagar-bhopal-bands-3bg10tvsko.jpg",
  },
  {
    title: "Birthday Party Planners",
    description: "Creating joyful and unique birthday celebrations.",
    imageUrl:
      "https://i0.wp.com/www.bobbytikkiwala.in/wp-content/uploads/2019/06/birthday-party-catering-service.jpg?fit=640%2C360&ssl=1",
  },
  {
    title: "Traditional & Social Events",
    description: "Celebrating culture and traditions with finesse.",
    imageUrl:
      "https://www.shutterstock.com/image-photo/nandgaon-india-01-march-2023-600nw-2334110717.jpg",
  },
  {
    title: "Event Essentials",
    description: "All you need for a perfect event under one roof.",
    imageUrl: "https://www.kumardecoration.com/img/about.png",
  },
];

const OurServices: React.FC = () => {
  return (
    <div className={styles.services}>
      <h4>Crafting Dream Events with Precision and Passion</h4>
      <div>
        <h1>Our Services</h1>
        <hr />
      </div>
      <p>
        At Evoke Event & Wedding Planners, we specialize in seamless event
        management services. From meticulous wedding planning and exquisite
        decorations, corporate events to expert guest management and hospitality
        in Bhopal and Indore, our team ensures your special occasions are
        flawlessly executed. Trust us for unparalleled professionalism and
        unforgettable events.
      </p>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
