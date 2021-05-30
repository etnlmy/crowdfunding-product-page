import React, { useLayoutEffect, useRef } from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ value }) => {
  const inner = useRef(null);
  useLayoutEffect(() => {
    setTimeout(() => (inner.current.style.width = `${Math.min(100, 100 * value)}%`), 500);
  });

  return (
    <div className={styles.outer}>
      <div ref={inner} className={styles.inner} style={{ width: "0%" }}></div>
    </div>
  );
};

export default ProgressBar;
