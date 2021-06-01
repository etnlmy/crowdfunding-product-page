import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../images/logo.svg";
import HamburgerButton from "../hamburger-button/HamburgerButton";
import MobileMenu from "../mobile-menu/MobileMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <a className={styles.logo} href="/">
            <img alt="logo-crowdfund" src={logo} />
          </a>
          <div className={styles.menuDesktop}></div>
          <HamburgerButton
            onClick={() => setMenuOpen(!menuOpen)}
            clicked={menuOpen}
          />
        </nav>
      </header>
      { menuOpen && <MobileMenu /> }
    </>
  );
};

export default Header;
