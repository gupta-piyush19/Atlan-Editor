import React, { useContext } from "react";
import Modal from "react-modal";
import QueryItem from "./QueryItem";

import queryContext from "../../../context/query/queryContext";

const PhoneModal = () => {
  const { queries, modalOpen, changeModalState } = useContext(queryContext);

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.6)",
      zIndex: 40,
    },
    content: {
      borderRadius: 10,
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function closeModal() {
    changeModalState(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        closeTimeoutMS={300}
      >
        {queries.map((query, idx) => (
          <QueryItem key={idx} query={query} />
        ))}
      </Modal>
    </div>
  );
};

export default PhoneModal;
