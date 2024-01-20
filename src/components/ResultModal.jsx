import React, { useState } from "react";
import Modal from "react-modal";
import { RotateLoader } from "react-spinners";
import { usePredictionContext } from "../context/PredictionContext";
import congrats from "../assets/congrats.gif";
import loss from "../assets/loss.gif";

Modal.setAppElement("#root");

const ResultModal = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  const {
    amount,
    setAmount,
    processedResult,
    modalIsOpen,
    setModalIsOpen,
    predict,
    setPredict,
    amountWon,
    isWin,
    result,
  } = usePredictionContext();

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="flex flex-col items-center justify-center">
          {isProcessing ? (
            <h2 className="text-[1.5rem] font-semibold text-center">
              Processing
            </h2>
          ) : (
            <h2 className="text-[1.5rem] font-semibold text-center">Results</h2>
          )}
          {isProcessing && (
            <div className="w-[70%] mx-auto my-[7rem] flex flex-col items-center justify-center pt-[1rem">
              <RotateLoader
                color="#2563EB"
                cssOverride={{}}
                loading={isProcessing}
                margin={60}
                size={30}
                speedMultiplier={5}
              />
            </div>
          )}
          {!isProcessing && (
            <div className="mont">
              {isWin ? (
                <div className="">
                  <div className="w-[200px] h-[150px mx-auto ">
                    <img
                      className="w-full h-full "
                      src={congrats}
                      alt="Congratulations message"
                    />
                  </div>
                  <div className="pt-[1rem]">
                    <div className="text-center text-[1.2rem]">
                      Congratulations!🎊 You predicted {predict}, the coin
                      landed on {result}.{" "}
                    </div>
                    <div className="text-center text-[1.2rem]">
                      You won GHS {amountWon} cedis.
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="w-[150px] h-[200px] mx-auto">
                    <img
                      className="w-full h-full object-cover"
                      src={loss}
                      alt="Lost message"
                    />
                  </div>
                  <div className="pt-[1rem]">
                    <div className="text-center text-[1.2rem]">
                      Sorry!😬 You predicted {predict}, but the coin landed on{" "}
                      {result}.
                    </div>
                    <div className="text-center text-[1.2rem] ">
                      You lost GHS{amount} cedis.
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="pt-[1rem]">
            {isProcessing && (
              <button
                className="py-[0.5rem] px-[1.5rem] rounded-md text-[1rem] text-white font-semibold bg-blue-600 hover:bg-blue-700"
                onClick={() => {
                  processedResult;
                  setIsProcessing(false);
                  console.log("You chose", predict, "landed on", result);
                }}
              >
                View Results
              </button>
            )}
            {!isProcessing && (
              <button
                className="py-[0.5rem] px-[1.5rem] rounded-md text-[1rem] text-white font-semibold bg-red-600 hover:bg-red-700"
                disabled={isProcessing}
                onClick={() => {
                  setModalIsOpen(false);
                  setPredict("");
                  setAmount("");
                }}
              >
                Close
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ResultModal;
