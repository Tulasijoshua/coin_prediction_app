import { createContext, useContext, useState } from "react";

const PredictionContext = createContext();

const PredictionProvider = ({children}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return <PredictionContext.Provider value={{modalIsOpen, setModalIsOpen}}>
        {children}
    </PredictionContext.Provider>
}

export const usePredictionContext = () => {
    return useContext(PredictionContext);
}

export default PredictionProvider;