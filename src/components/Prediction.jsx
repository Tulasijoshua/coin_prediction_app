import React, { useState } from "react";
import ResultModal from "./ResultModal";
import { usePredictionContext } from "../context/PredictionContext";

const Prediction = () => {
  
  const {modalIsOpen, setModalIsOpen, predict, setPredict} = usePredictionContext()

  

  return (
    <div className="w-full">
      <div className="bg-[#000] w-full h-[50px] flex flex-col justify-center items-center">
        <h2 className="text-4xl text-[#fff">Predict & Win</h2>
      </div>
      <div className="flex justify-center items-center gap-[4rem]">
        <button onClick={() => setPredict('Head')}>Head</button>
        <button onClick={() => setPredict('Tail')}>Tail</button>
      </div>
      
      <div className="py-5">
        
      </div>
      {modalIsOpen && 
        <ResultModal />
      }
        
        <button
          disabled={predict === ''}
          onClick={() => setModalIsOpen(true)}
        >
          Stake
        </button>
        
    </div>
  );
};

export default Prediction;
