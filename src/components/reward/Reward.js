import React from "react";
import styles from "./Reward.module.css";

const Reward = ({ name, description, minumumPledge, nbLeft, onSelect }) => {
  const unavailable = nbLeft === 0;

  return (
    <div className={styles.container + (unavailable ? ` ${styles.disabled}` : "") }>
      <span>
        <b className={`${styles.name} block`}>{name}</b>
      </span>
      <span
        className={`${styles.pledge} moderate-cyan block`}
      >{`Pledge $${minumumPledge} or more`}</span>
      <p>{description}</p>
      <span className={styles.nbLeft}>
        <strong>{nbLeft}</strong> left
      </span>
      <button className="button" disabled={unavailable} onClick={onSelect}>
        Select Reward
      </button>
    </div>
  );
};

export default Reward;
