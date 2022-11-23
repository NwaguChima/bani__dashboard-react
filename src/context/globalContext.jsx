import React, { createContext, useState } from "react";

const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const [data, setData] = useState(false);
  const [error, setError] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
        error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
