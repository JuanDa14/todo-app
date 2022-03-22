import React from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../actions/ui";
import FormTodo from "../todo/FormTodo";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "auto",
    padding: "1rem",
  },
};

ReactModal.setAppElement("#root");

const Modal = () => {
  const dispatch = useDispatch();

  const { open } = useSelector((state) => state.ui);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <ReactModal
      isOpen={open}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      onRequestClose={handleCloseModal}
    >
      <FormTodo />
    </ReactModal>
  );
};

export default Modal;
