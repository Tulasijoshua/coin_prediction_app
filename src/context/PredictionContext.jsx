import { createContext, useContext, useState } from "react";

const PredictionContext = createContext();

const PredictionProvider = ({children}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [predict, setPredict] = useState('');
    const [isWin, setIsWin] = useState(null);
    const [amountWon, setAmountWon] = useState();

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

    return <PredictionContext.Provider 
        value={{
            modalIsOpen, 
            setModalIsOpen, 
            predict, 
            setPredict, 
            isWin,
            amountWon,
            coinTossPrediction
        }}>
        {children}
    </PredictionContext.Provider>
}

export const usePredictionContext = () => {
    return useContext(PredictionContext);
}

export default PredictionProvider;