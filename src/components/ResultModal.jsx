import React, { useState } from "react";
import Modal from "react-modal";
import { RotateLoader } from "react-spinners";
import { usePredictionContext } from "../context/PredictionContext";

Modal.setAppElement("#root");

const ResultModal = () => {
  const { modalIsOpen, setModalIsOpen } = usePredictionContext();

  return (
    <div>
      {/* <button onClick={() => setModalIsOpen(true)}>Open modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "grey",
          },
          content: {
            color: "orange",
          },
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <h2>Modal title</h2>
          <div className=" w-[70%] h-[50vh] mx-auto flex flex-col items-center justify-center pt-8">
            <RotateLoader
              color="#36d7b7"
              cssOverride={{}}
              loading
              margin={86}
              size={30}
              speedMultiplier={5}
            />
          </div>
          <p>Modal Body</p>
          {/* <button onClick={() => setModalIsOpen(false)}>Close</button> */}
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default ResultModal;
