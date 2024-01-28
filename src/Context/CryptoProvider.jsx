// CryptoContext.jsx
import React, { createContext, useContext, useState } from 'react';

const CryptoContext = createContext();

export const useCryptoContext = () => useContext(CryptoContext);

export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState([]);

  const contextValue = {
    cryptoData,
    setCryptoData,
  };

  return (
    <CryptoContext.Provider value={contextValue}>
      {children}
    </CryptoContext.Provider>
  );
};
