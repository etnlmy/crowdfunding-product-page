import React from "react";
import ProgressBar from "../progress-bar/ProgressBar";
import styles from "./Product.module.css";

const Product = ({ data }) => {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <img src={`/${data.logo}`} className={styles.logo} alt={data.name} />
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <div className={styles.buttons}>
          <button>Back this project</button>
          <div className={styles.bookmark}>
            <button className={styles.bookmarkButton}></button>
            <span>Bookmark</span>
          </div>
        </div>
      </section>
      <section>
        <span className={styles.statNumber}>
          {`$${data.amountRaised.toLocaleString("en")}`}
        </span>
        <span
          className={styles.statLabel}
        >{`of ${data.amountToRaise} backed`}</span>
        <div className={styles.divider}></div>
        <span className={styles.statNumber}>
          {`$${data.totalBackers.toLocaleString("en")}`}
        </span>
        <span className={styles.statLabel}>total backers</span>
        <div className={styles.divider}></div>
        <span className={styles.statNumber}>{data.daysLeft}</span>
        <span className={styles.statLabel}>days left</span>
        <ProgressBar
          value={data.amountRaised / data.amountToRaise}
        ></ProgressBar>
      </section>
      <section className={styles.about}>
        <h2>About this project</h2>
        {data.about.split("\n").map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </section>
    </div>
  );
};

export default Product;
