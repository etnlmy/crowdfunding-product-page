import React, { useEffect, useRef, useState } from "react";
import styles from "./Pledge.module.css";

const NO_REWARD =
  "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.";

const Pledge = ({ pledge, isSelected, onSelect, onSubmitPledge }) => {
  const isPledgeWithNoReward = pledge.reward === undefined;
  const minimumPledge = isPledgeWithNoReward ? 5 : pledge.reward.minimumPledge;
  const isDisabled = isPledgeWithNoReward ? false : pledge.reward.nbLeft === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitPledge({
      amount: enteredPledge,
      rewardId: pledge.id,
    })
  }

  const [enteredPledge, setEnteredPledged] = useState(minimumPledge);
  const inputField = useRef();

  useEffect(() => {
    if (isSelected) inputField.current.focus();
  }, [isSelected]);

  return (
    <div
      className={
        styles.container +
        (isSelected ? ` ${styles.containerSelected}` : "") +
        (isDisabled ? ` ${styles.containerDisabled}` : "")
      }
      role="button"
      tabIndex={isDisabled ? "" : "0"}
      onClick={isDisabled ? undefined : onSelect}
      onKeyPress={(e) => {
        if (e.key === "Enter") onSelect();
      }}
    >
      <div className={styles.main}>
        <div className={styles.header}>
          <div
            className={
              styles.radioButton +
              (isSelected ? ` ${styles.radioButtonSelected}` : "")
            }
          ></div>
          {!isPledgeWithNoReward && (
            <div>
              <h2>{pledge.reward.name}</h2>
              <span>{`Pledge $${pledge.reward.minimumPledge} or more`}</span>
            </div>
          )}
          {isPledgeWithNoReward && <h2>Pledge with no reward</h2>}
        </div>
        <p className="mb-8">
          {isPledgeWithNoReward ? NO_REWARD : pledge.reward.reward}
        </p>
        {!isPledgeWithNoReward && (
          <div className={styles.nbLeft}>
            <span>
              <strong>{pledge.reward.nbLeft}</strong>left
            </span>
          </div>
        )}
      </div>
      <div
        className={
          styles.enterPledge +
          (isSelected ? "" : ` ${styles.enterPledgeHidden}`)
        }
      >
        <p className="mb-16">Enter your pledge</p>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <span className={styles.inputSymbolDollar}>
            <input
              ref={inputField}
              required
              type="number"
              step=".5"
              name="pledge"
              min={minimumPledge}
              pattern="^\d+(\.|\,)\d{2}"
              value={enteredPledge}
              onChange={(e) => setEnteredPledged(e.target.value)}
            ></input>
          </span>
          <button type="submit" className="button button--smaller">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pledge;
