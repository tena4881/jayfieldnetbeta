import React, { useContext } from 'react';
import Linktree from "../../components/Linktree"
import NoJFC from "../../components/NoJFC";
import {  useEthers, useTokenBalance } from '@usedapp/core'
import AccountHeader from '../../components/AccountHeader/'
import {TPPage1} from './tpp'
import { formatUnits , formatEther} from '@ethersproject/units'
import UserContext from '../../components/User/user';
export default function SocailMedia({ state, web3Handler }) {
  const user = useContext(UserContext);
  
  return (
    
    <div>
      
      {user.account  ? (
      <>
        <TPPage1 account={user.account}/>
      </>
    ) : (
        <>
        <AccountHeader account={user.account}/>
        
      </>
    )}
      
    
  </div>
  );
}
