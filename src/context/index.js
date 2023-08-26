import React, { useState, useContext, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [stateValue, setStateValue] = useState(null);

  return (
    <AppContext.Provider value={{ stateValue, setStateValue }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
export const useDataOfContext = () => useContext(AppContext);