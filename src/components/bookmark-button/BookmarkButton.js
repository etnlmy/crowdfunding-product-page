import React from "react";
import styles from "./BookmarkButton.module.css";

const BookmarkButton = ({ bookmarked, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        `button ` + (bookmarked ? styles.buttonActive : styles.button)
      }
    >
      <span>{bookmarked ? "Bookmarked" : "Bookmark"}</span>
    </button>
  );
};

export default BookmarkButton;
