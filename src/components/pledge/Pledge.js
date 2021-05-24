import React from "react";
import styles from "./Pledge.module.css";

const NO_REWARD =
  "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.";

const Pledge = ({ pledge, isSelectedInitially, onSelect }) => {
  const isPledgeWithNoReward = pledge.reward === undefined;

  return (
    <div className={styles.container} role="button" tabIndex="0">
      <div className={styles.header}>
        <div className={`${styles.radioButton}`}></div>
        {!isPledgeWithNoReward && (
          <div>
            <h2>{pledge.reward.name}</h2>
            <span>{`Pledge $${pledge.reward.minimumPledge} or more`}</span>
          </div>
        )}
        {isPledgeWithNoReward && <h2>Pledge with no reward</h2>}
      </div>
      <p>{isPledgeWithNoReward ? NO_REWARD : pledge.reward.reward}</p>
      {!isPledgeWithNoReward && (
        <div className={styles.nbLeft}>
          <span>
            <strong>{pledge.reward.nbLeft}</strong>left
          </span>
        </div>
      )}
    </div>
  );
};

export default Pledge;
