import React from "react";
import styles from "./Modal.module.css";
import iconCloseModal from "../../images/icon-close-modal.svg";
import useDelayedUnmount from "../../hooks/useDelayedUnmount";

const Modal = ({ type, isOpen, title, onClose, children, confirmLabel }) => {
  const isMounted = useDelayedUnmount(isOpen, 250);

  return (
    isMounted && (
      <>
        <div
          className={
            styles.backdrop +
            (isOpen ? ` ${styles.fadeIn}` : ` ${styles.fadeOut}`)
          }
        ></div>
        <div
          tabIndex="0"
          className={
            styles.container +
            (type === "pop-up" ? ` ${styles.popUp}` : "") +
            (isOpen ? ` ${styles.slideIn}` : ` ${styles.slideOut}`)
          }
          role="dialog"
          aria-labelledby="title"
          aria-hidden="false"
          onKeyDown={(e) => {
            if (e.key === "Escape") onClose();
          }}
        >
          {title && (
            <header className={styles.header}>
              <h2 id="title" className={styles.title}>
                {title}
              </h2>
              <button onClick={onClose} className={styles.closeButton}>
                <img src={iconCloseModal} alt="close" />
              </button>
            </header>
          )}
          <div className={styles.scrollable}>{children}</div>
          {confirmLabel && (
            <footer>
              <button onClick={onClose} className="button button--smaller">
                {confirmLabel}
              </button>
            </footer>
          )}
        </div>
      </>
    )
  );
};

export default Modal;
