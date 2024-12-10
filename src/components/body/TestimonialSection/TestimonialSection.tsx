import React, { useState } from "react";
import styles from "./TestimonialSection.module.css";

const testimonials = [
  {
    name: "Mihir Mittal",
    text: "Anshul and his team's flawless management made our celebration stress-free. Their personalized planning and warm hospitality were exceptional. Thank you for an amazing experience!",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOeZjZWEr4oFmJhILQQgTy7-WUX9BmRrAAFw&s",
  },
  {
    name: "Riya Sharma",
    text: "Evoke Event & Wedding Planners exceeded our expectations! From stunning decorations to smooth event execution, they made our special day truly unforgettable.",
    avatar:
      "https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=612x612&w=0&k=20&c=YxctPklAOJMmy6Tolyvn45rJL3puk5RlKt39FO46ZeA=",
  },
  {
    name: "Kunal Verma",
    text: "Their professionalism and creativity were outstanding. Every detail was handled perfectly. Highly recommend their services!",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzqC0Yk2EdPxA71JDBtbYuKdmmbmvU8mi1Q&s",
  },
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.testimonial}>
      <h2 className={styles.hedding}>What Our Clients Say</h2>
      <div className={styles.quote}>
        <img
          src={testimonials[currentIndex].avatar}
          alt="Client Avatar"
          className={styles.avatar}
        />
        <p className={styles.text}>{testimonials[currentIndex].text}</p>
        <h3>- {testimonials[currentIndex].name}</h3>
      </div>
      <div className={styles.dots}>
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
