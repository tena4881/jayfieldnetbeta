import React, { useState, createContext } from "react";

// Create Context Object
export const AppContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const AppContextProvider = props => {
    const [isLoggedIn,setisLoggedIn] = useState(false);
    const [account,setAccount] = useState('0x');

  return (
    <AppContext.Provider value={{isLoggedIn,
                                  setisLoggedIn, 
                                  account,
                                  setAccount}}>
      {props.children}
    </AppContext.Provider>
  );
};