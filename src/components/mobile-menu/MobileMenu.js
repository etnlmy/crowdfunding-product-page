import React from 'react';
import styles from "./MobileMenu.module.css";

const MobileMenu = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        <li><a href="/">About</a></li>
        <li><a href="/">Discover</a></li>
        <li><a href="/">Get Started</a></li>
      </ul>
    </div>
  );
};

export default MobileMenu;  