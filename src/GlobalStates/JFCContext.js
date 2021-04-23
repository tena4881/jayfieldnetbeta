import React, {useState} from 'react';

const initialState = {
    balance: '0',
};

export const JFCContext = React.createContext();

const JFCStore = ({children}) => {
    const [balance,setBalance] = useState(initialState);


return (
    <JFCContext.Provider value={[balance,setBalance]}>
        {children}
    </JFCContext.Provider>
    )
}
export default JFCStore;