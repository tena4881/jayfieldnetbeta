import React, { useState, createContext } from "react";

// Create Context Object
export const AppContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const AppContextProvider = props => {
    const [isLoggedIn,setisLoggedIn] = useState(false);
    const [account,setAccount] = useState('0x');
    const [ethBalance,setEthBalance] = useState(10);

  return (
    <AppContext.Provider value={{isLoggedIn,
                                  setisLoggedIn, 
                                  account,
                                  setAccount,
                                  ethBalance,
                                  setEthBalance}}>
      {props.children}
    </AppContext.Provider>
  );
};