import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Company Info */}
        <div className={styles.companyInfo}>
          <h2 className={styles.companyName}>Dream Planners Co.</h2>
          <p className={styles.description}>
            At Dream Planners Co., we specialize in crafting unforgettable
            experiences with premium event planning services. Trust us to bring
            your vision to life with style and precision.
          </p>
          <p className={styles.copy}>
            ©2023 - Dream Planners Co. All Rights Reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.quickLinks}>
          <h3 className={styles.heading}>Quick Links</h3>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className={styles.services}>
          <h3 className={styles.heading}>Our Services</h3>
          <ul>
            <li>Wedding Planning</li>
            <li>Corporate Events</li>
            <li>Birthday Parties</li>
            <li>Event Styling</li>
            <li>Venue Selection</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <h3 className={styles.heading}>Contact Us</h3>
          <p>
            <strong>Address:</strong> 123 Dream Lane, Bhopal, MP, India
          </p>
          <p>
            <strong>Phone:</strong> +91 9876543210
          </p>
          <p>
            <strong>Email:</strong> info@dreamplanners.com
          </p>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.icon}>
              🔗
            </a>
            <a href="#" className={styles.icon}>
              🔗
            </a>
            <a href="#" className={styles.icon}>
              🔗
            </a>
            <a href="#" className={styles.icon}>
              🔗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
