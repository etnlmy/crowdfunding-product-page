import React, { useState } from "react";
import { useMediaPredicate } from "react-media-hook";
import BackProjectDialog from "../back-project-dialog/BackProjectDialog";
import BookmarkButton from "../bookmark-button/BookmarkButton";
import ProgressBar from "../progress-bar/ProgressBar";
import Reward from "../reward/Reward";
import ThanksDialog from "../thanks-dialog/ThanksDialog";
import styles from "./Product.module.css";

const formatNumber = (number) => number.toLocaleString("en");

const Product = ({ rewardData }) => {
  const isDesktop = useMediaPredicate("(min-width: 700px)");

  const [isPledgeDialogOpen, setPledgeDialogOpen] = useState(false);
  const [isThanksDialogOpen, setThanksDialogOpen] = useState(false);

  const [selectedRewardId, setSelectedRewardId] = useState();
  const [data, setData] = useState(rewardData);

  const [bookmarked, setBookmarked] = useState(false)

  const openPledgeDialog = (rewardId) => {
    setSelectedRewardId(rewardId);
    setPledgeDialogOpen(true);
  };

  const handlePledgeSubmitted = ({ amount, rewardId }) => {
    const newData = JSON.parse(JSON.stringify(data));
    newData.amountRaised = parseFloat(data.amountRaised) + parseFloat(amount);
    newData.totalBackers = data.totalBackers + 1;
    const rewardPledged = newData.rewards.find((r) => r.id === rewardId);
    if (rewardPledged) rewardPledged.nbLeft = rewardPledged.nbLeft - 1;
    setData(newData);
    setPledgeDialogOpen(false);
    setThanksDialogOpen(true);
  };

  return (
    <>
      <div>
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
              <button className="button" onClick={() => openPledgeDialog(-1)}>
                Back this project
              </button>
              <BookmarkButton onClick={() => setBookmarked(!bookmarked)} bookmarked={bookmarked} />
            </div>
          </section>
          <section>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>
                  {`$${formatNumber(data.amountRaised)}`}
                </span>
                <span className={styles.statLabel}>{`of ${formatNumber(
                  data.amountToRaise
                )} backed`}</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>
                  {`${formatNumber(data.totalBackers)}`}
                </span>
                <span className={styles.statLabel}>total backers</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{data.daysLeft}</span>
                <span className={styles.statLabel}>days left</span>
              </div>
            </div>
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
                onSelect={() => openPledgeDialog(reward.id)}
              ></Reward>
            ))}
          </section>
        </div>
      </div>
      <BackProjectDialog
        isOpen={isPledgeDialogOpen}
        rewards={data.rewards}
        onClose={() => setPledgeDialogOpen(false)}
        selectedRewardId={selectedRewardId}
        onSubmitPledge={handlePledgeSubmitted}
      ></BackProjectDialog>
      <ThanksDialog
        isOpen={isThanksDialogOpen}
        onClose={() => setThanksDialogOpen(false)}
      ></ThanksDialog>
    </>
  );
};

export default Product;
