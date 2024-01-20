import React, { useState } from "react";
import Modal from "react-modal";
import { RotateLoader } from "react-spinners";
import { usePredictionContext } from "../context/PredictionContext";

Modal.setAppElement("#root");

const ResultModal = () => {
  const [isProcessing, setIsProcessing] = useState(true)
  const { modalIsOpen, setModalIsOpen, predict, coinTossPrediction, amountWon, isWin } = usePredictionContext();

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
          <div className=" w-[70%] mx-auto flex flex-col items-center justify-center pt-8">
            <RotateLoader
              color="#36d7b7"
              cssOverride={{}}
              loading={isProcessing}
              margin={86}
              size={30}
              speedMultiplier={5}
            />
          </div>
          {!isProcessing &&
          <div>{isWin ? `You won` : "You lose"}</div>
          }
          <p>Modal Body</p>
          <button
            onClick={() => {
              coinTossPrediction(predict, 80);
              setIsProcessing(false)
              console.log("You chose", predict);
            }}
          >
            Results
          </button>
          {!isProcessing &&
          <button disabled={isProcessing} onClick={() => setModalIsOpen(false)}>Close</button>
          }
        </div>
      </Modal>
    </div>
  );
};

export default ResultModal;
