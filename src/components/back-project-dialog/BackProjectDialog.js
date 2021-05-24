import React from "react";
import Modal from "../modal/Modal";
import Pledge from "../pledge/Pledge";

const BackProjectDialog = ({ rewards, onClose, selectedRewardId }) => {
  const pledges = rewards.map((r) => ({
    reward: r,
    id: r.id,
  }));
  pledges.unshift({ reward: undefined, id: -1 });

  return (
    <Modal onClose={onClose} title="Back this project">
      <p>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      {pledges.map((p) => (
        <Pledge pledge={p} isSelectedInitially={1 === p.id}></Pledge>
      ))}
    </Modal>
  );
};

export default BackProjectDialog;
