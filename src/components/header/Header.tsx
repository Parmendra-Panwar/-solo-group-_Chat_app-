import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false); // State for mobile menu visibility

  let dropdownTimer: ReturnType<typeof setTimeout>;

  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Mouse enter and leave handlers for dropdown (desktop)
  const handleMouseEnter = () => {
    clearTimeout(dropdownTimer); // Clear any previous timeout
    setShowDropdown(true); // Show dropdown immediately
  };

  const handleMouseLeave = () => {
    dropdownTimer = setTimeout(() => {
      setShowDropdown(false); // Hide dropdown after 300ms
    }, 300);
  };

  const handleClick = () => {
    const phoneNumber = "7067416638";
    const message = encodeURIComponent("Hello, I need assistance!"); // Make sure the message is URL encoded
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev); // Toggle the menu visibility
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>Dream Planners Co</div>
      <nav className={`${styles.nav} ${menuVisible ? styles.show : ""}`}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <div
          className={styles.dropdown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/services" className={styles.link}>
            Services
          </Link>
          <div
            className={`${styles.dropdownMenu} ${
              showDropdown ? styles.showDropdown : ""
            }`}
          >
            <ul>
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
          </div>
        </div>
        <Link to="/ourwork" className={styles.link}>
          Our Work
        </Link>
        <Link to="/contact" className={styles.link}>
          Contact
        </Link>
      </nav>
      <button className={styles.ctaButton} onClick={handleClick}>
        Whatsapp Us
      </button>
      <div className={styles.togglerBtn} onClick={toggleMenu}>
        <div className={styles.chamchamchampa}></div>
        <div className={styles.chamchamchampa}></div>
        <div className={styles.chamchamchampa}></div>
      </div>
    </header>
  );
};

export default Header;
