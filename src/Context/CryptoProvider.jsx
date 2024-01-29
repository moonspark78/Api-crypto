// CryptoContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const CryptoContext = createContext();

export const useCryptoContext = () => useContext(CryptoContext);

export const CryptoProvider = ({ children }) => {
  // Étape 1: Récupérer les données du localStorage au chargement initial
  const storedData = localStorage.getItem('cryptoData');

  // Étape 2: Utiliser useState pour créer un état cryptoData
  // Si des données sont présentes dans le localStorage, les parser, sinon utiliser un tableau vide
  const [cryptoData, setCryptoData] = useState(storedData ? JSON.parse(storedData) : []);

  // Étape 3: Mettre à jour le localStorage à chaque modification de cryptoData
  useEffect(() => {
    localStorage.setItem('cryptoData', JSON.stringify(cryptoData));
  }, [cryptoData]);

  // Étape 4: Créer le contexte avec les valeurs de cryptoData et setCryptoData
  const contextValue = {
    cryptoData,
    setCryptoData,
  };

  // Étape 5: Rendre le composant avec le contexte fourni
  return (
    <CryptoContext.Provider value={contextValue}>
      {children}
    </CryptoContext.Provider>
  );
};
