import React from "react";
import styles from "./Modal.module.css";
import iconCloseModal from "../../images/icon-close-modal.svg";

const Modal = ({ title, onClose, children }) => {
  return (
    <>
      <div className={styles.backdrop}></div>
      <div
        className={styles.container}
        role="dialog"
        aria-labelledby="title"
        aria-hidden="false"
      >
        <header className={styles.header}>
          <h2 id="title" className={styles.title}>
            {title}
          </h2>
          <button onClick={onClose} className={styles.closeButton}>
            <img src={iconCloseModal} alt="close" />
          </button>
        </header>
        <div className={styles.scrollable}>{children}</div>
      </div>
    </>
  );
};

export default Modal;
