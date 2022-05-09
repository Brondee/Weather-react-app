import { useEffect } from "react";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { modal, closeModal } = useGlobalContext();
  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal();
    }, 2000);
    return () => clearTimeout(timer);
  }, [modal.show]);
  return (
    <div className={`${modal.show ? "modal modal-show" : "modal"}`}>
      <p>{modal.text}</p>
    </div>
  );
};

export default Modal;
