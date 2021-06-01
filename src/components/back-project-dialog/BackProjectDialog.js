import React, { useState } from "react";
import Modal from "../modal/Modal";
import Pledge from "../pledge/Pledge";

const BackProjectDialog = ({
  isOpen,
  rewards,
  onClose,
  selectedRewardId,
  onSubmitPledge,
}) => {
  const pledges = rewards.map((r) => ({
    reward: r,
    id: r.id,
  }));
  pledges.unshift({ reward: undefined, id: -1 });

  const [selectedPledgeId, setSelectedPledgeId] = useState(selectedRewardId);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Back this project"
      portalId="back-project-modal"
    >
      <p>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      {pledges.map((p) => (
        <Pledge
          key={p.id}
          pledge={p}
          isSelected={selectedPledgeId === p.id}
          onSelect={() => setSelectedPledgeId(p.id)}
          onSubmitPledge={onSubmitPledge}
        ></Pledge>
      ))}
    </Modal>
  );
};

export default BackProjectDialog;
