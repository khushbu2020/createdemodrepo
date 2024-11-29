import React, { createContext, useContext, useState } from "react";

// Create the Loading Context
const LoadingContext = createContext();

// Create a provider component
export const LoadingProvider = ({ children }) => {
  const [isLoad, setIsLoad] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoad, setIsLoad }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Custom hook for easy access to the loading context
export const useLoad = () => {
  return useContext(LoadingContext);
};
