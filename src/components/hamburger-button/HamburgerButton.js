import React from 'react';
import styles from "./HamburgerButton.module.css";
import iconHamburger from "../../images/icon-hamburger.svg";
import iconCloseMenu from "../../images/icon-close-menu.svg";

const HamburgerButton = ({ clicked, onClick }) => {
  return (
    <button onClick={onClick} className={styles.hamburger}>
      <img alt="icon-hamburger" src={clicked ? iconCloseMenu : iconHamburger} />
    </button>
  );
};

export default HamburgerButton;