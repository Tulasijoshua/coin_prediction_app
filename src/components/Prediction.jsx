import React, { useState } from "react";
import ResultModal from "./ResultModal";
import { usePredictionContext } from "../context/PredictionContext";

const Prediction = () => {
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isWin, setIsWin] = useState(null);
  const [amountWon, setAmountWon] = useState();
  const [results, setResults] = useState();
  
  const {modalIsOpen, setModalIsOpen} = usePredictionContext()

  function coinTossPrediction(userPrediction, stakeAmount) {
    // Validating user input
    if (
      typeof userPrediction !== "string" ||
      (userPrediction !== "Head" && userPrediction !== "Tail")
    ) {
      return "Invalid prediction. Please choose 'Head' or 'Tail'.";
    }

    if (typeof stakeAmount !== "number" || stakeAmount <= 0) {
      return "Invalid stake amount. Please enter a positive number.";
    }

    const coinResult = Math.random() < 0.5 ? "Head" : "Tail";

    const isWin = userPrediction === coinResult;
    setIsWin(isWin);

    const newAmount = isWin ? 2 * stakeAmount : 0;
    setAmountWon(newAmount);

    // const resultMessage = isWin
    //   ? `Congratulations! You predicted ${userPrediction}. You won ${newAmount} units.`
    //   : `Sorry! You predicted ${userPrediction}, but the coin landed on ${coinResult}. You lost ${stakeAmount} units.`;

    // return setResults(resultMessage);
  }

  // Example usage:
  const userPrediction = "Tail";
  const stakeAmount = 70;

  //   const roundResult = coinTossPrediction(userPrediction, stakeAmount);
  //   alert(roundResult);

  return (
    <div>
      <h2>Predict & Win</h2>
      <div>{isProcessing && `Loading...`}</div>
      <div>{isWin ? `You won` : "You lose"}</div>
      <div className="py-5">
        
      </div>
      {modalIsOpen && 
        <ResultModal />
      }
        <button
          onClick={() => setModalIsOpen(true)}
        >
          Stake
        </button>
    </div>
  );
};

export default Prediction;
