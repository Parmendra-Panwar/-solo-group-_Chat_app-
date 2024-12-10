import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  let dropdownTimer: ReturnType<typeof setTimeout>;

  // Handle header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change state based on scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mouse enter and leave handlers for dropdown
  const handleMouseEnter = () => {
    clearTimeout(dropdownTimer); // Clear any previous timeout
    setShowDropdown(true); // Show dropdown immediately
  };

  const handleMouseLeave = () => {
    dropdownTimer = setTimeout(() => {
      setShowDropdown(false); // Hide dropdown after 300ms
    }, 300);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>Dream Planners Co</div>
      <nav className={styles.nav}>
        <a href="/" className={styles.link}>
          Home
        </a>
        <div
          className={styles.dropdown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/Services" className={styles.link}>
            Services
          </a>
          {showDropdown && (
            <ul className={`${styles.dropdownMenu} ${styles.fadeIn}`}>
              <li className={styles.dropdownItem}>
                Wedding Planning & Management
              </li>
              <li className={styles.dropdownItem}>
                Corporate Event Management
              </li>
              <li className={styles.dropdownItem}>
                Hospitality & Guest Management
              </li>
              <li className={styles.dropdownItem}>Wedding Decor & Designs</li>
              <li className={styles.dropdownItem}>Concerts & Live Shows</li>
              <li className={styles.dropdownItem}>Birthday Party Planners</li>
              <li className={styles.dropdownItem}>
                Traditional & Social Events
              </li>
              <li className={styles.dropdownItem}>Event Essentials</li>
            </ul>
          )}
        </div>
        <a href="/ourwork" className={styles.link}>
          Our Work
        </a>
        <a href="Contact" className={styles.link}>
          Contact
        </a>
      </nav>
      <button className={styles.ctaButton}>Whatsapp Us</button>
      <button className={styles.togglerBnt}>⬜</button>
    </header>
  );
};

export default Header;
