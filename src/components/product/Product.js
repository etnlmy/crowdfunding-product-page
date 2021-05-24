import React, { useState } from "react";
import { useMediaPredicate } from "react-media-hook";
import BackProjectDialog from "../back-project-dialog/BackProjectDialog";
import ProgressBar from "../progress-bar/ProgressBar";
import Reward from "../reward/Reward";
import styles from "./Product.module.css";

const formatNumber = (number) => number.toLocaleString("en");

const Product = ({ data }) => {
  const isDesktop = useMediaPredicate("(min-width: 400px)");
  const [isDialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <div aria-hidden={isDialogOpen}>
        <header
          className={styles.image}
          style={{
            backgroundImage: `url(${
              isDesktop ? data.imageDesktop : data.imageMobile
            })`,
          }}
        ></header>
        <div className={styles.main}>
          <section className={styles.header}>
            <img
              src={`/${data.logo}`}
              className={styles.logo}
              alt={data.company}
            />
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <div className={styles.buttons}>
              <button className="button" onClick={() => setDialogOpen(true)}>
                Back this project
              </button>
              <div className={styles.bookmark}>
                <button className={`${styles.bookmarkButton} button`}></button>
                <span>Bookmark</span>
              </div>
            </div>
          </section>
          <section>
            <span className={styles.statNumber}>
              {`$${formatNumber(data.amountRaised)}`}
            </span>
            <span className={styles.statLabel}>{`of ${formatNumber(
              data.amountToRaise
            )} backed`}</span>
            <div className={styles.divider}></div>
            <span className={styles.statNumber}>
              {`$${formatNumber(data.totalBackers)}`}
            </span>
            <span className={styles.statLabel}>total backers</span>
            <div className={styles.divider}></div>
            <span className={styles.statNumber}>{data.daysLeft}</span>
            <span className={styles.statLabel}>days left</span>
            <ProgressBar
              value={data.amountRaised / data.amountToRaise}
            ></ProgressBar>
          </section>
          <section className={styles.aboutAndRewards}>
            <h2>About this project</h2>
            {data.about.split("\n").map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
            {data.rewards.map((reward) => (
              <Reward
                key={reward.id}
                name={reward.name}
                description={reward.reward}
                minumumPledge={reward.minimumPledge}
                nbLeft={reward.nbLeft}
              ></Reward>
            ))}
          </section>
        </div>
      </div>
      {isDialogOpen && (
        <BackProjectDialog
          rewards={data.rewards}
          onClose={() => setDialogOpen(false)}
        ></BackProjectDialog>
      )}
    </>
  );
};

export default Product;
