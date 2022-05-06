import { useState } from "react";

const Modal = ({ closeModal, text, show }) => {
  useState(() => {
    const timer = setTimeout(() => {
      closeModal();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`${show ? "modal modal-show" : "modal"}`}>
      <p>{text}</p>
    </div>
  );
};

export default Modal;
