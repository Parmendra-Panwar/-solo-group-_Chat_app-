import React from "react";
import styles from "./Footer.module.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/services">Services</a>
            </li>

            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/ourwork">Our Work</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className={styles.services}>
          <h3 className={styles.heading}>
            <a href="/services" className={styles.orsr}>
              Our Services
            </a>{" "}
          </h3>
          <ul>
            <li>
              <a href="/services">Wedding Planning</a>
            </li>
            <li>
              <a href="/services">Corporate Events</a>
            </li>
            <li>
              <a href="/services">Birthday Parties</a>
            </li>
            <li>
              <a href="/services">Event Styling</a>
            </li>
            <li>
              <a href="/services">Venue Selection</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <h3 className={styles.heading}>Contact Us</h3>
          <p>
            <strong>Address:</strong> 223 Bhopal, MP, India
          </p>
          <p>
            <strong>Phone:</strong> +91 98---------
          </p>
          <p>
            <strong>Email:</strong> info@dreamplanners.com
          </p>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/paras.panwar.davm/">
              <FaInstagramSquare size={40} />
            </a>
            <a href="https://www.linkedin.com/in/parmendr-panwar/">
              <FaLinkedin size={40} />
            </a>
            <a href="https://x.com/Parmendra444">
              <FaXTwitter size={40} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
