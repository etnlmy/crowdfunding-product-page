import React from "react";
import Modal from "../modal/Modal";
import iconCheck from "../../images/icon-check.svg";

const ThanksDialog = ({ isOpen, onClose }) => {
  return (
    <Modal type="pop-up" isOpen={isOpen} confirmLabel="Got it!" onClose={onClose}>
      <img className="mb-24" src={iconCheck} alt="check"></img>
      <h3 className="mb-24">Thanks for your support!</h3>
      <p className="mb-24">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
    </Modal>
  );
};

export default ThanksDialog;
