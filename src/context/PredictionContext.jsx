import { createContext, useContext, useState } from "react";

const PredictionContext = createContext();

const PredictionProvider = ({children}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [predict, setPredict] = useState('');
    const [isWin, setIsWin] = useState(null);
    const [amountWon, setAmountWon] = useState();
    const [result, setResult] = useState('')
    const [processedResult, setProcessedResult] = useState(null)
    const [amount, setAmount] = useState('');

    function coinTossPrediction(userPrediction, stakeAmount) {
        if (
          typeof userPrediction !== "string" ||
          (userPrediction !== "Head" && userPrediction !== "Tail")
        ) {
          return "Invalid prediction. Please choose 'Head' or 'Tail'.";
        }
    
        if (typeof stakeAmount !== "number" || stakeAmount <= 0) {
          return "Invalid stake amount. Please enter a positive number.";
        }
    
        const coinResult = Math.random() > 0.5 ? "Head" : "Tail";
        setResult(coinResult)
    
        const isWin = userPrediction === coinResult;
        setIsWin(isWin);
    
        const newAmount = isWin ? 2 * stakeAmount : 0;
        setAmountWon(newAmount);
    
      }

    return <PredictionContext.Provider 
        value={{
            modalIsOpen, 
            setModalIsOpen, 
            predict, 
            setPredict, 
            isWin,
            amount, 
            setAmount,
            amountWon,
            coinTossPrediction,
            result,
            setResult,
            processedResult, 
            setProcessedResult,
        }}>
        {children}
    </PredictionContext.Provider>
}

export const usePredictionContext = () => {
    return useContext(PredictionContext);
}

export default PredictionProvider;