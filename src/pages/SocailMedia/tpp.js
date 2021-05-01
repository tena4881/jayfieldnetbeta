import React, { useContext } from 'react';
import Linktree from "../../components/Linktree"
import NoJFC from "../../components/NoJFC";
import { useEtherBalance, useEthers, useTokenBalance } from '@usedapp/core'
import AccountHeader from '../../components/AccountHeader'
import { formatUnits , formatEther} from '@ethersproject/units'
import UserContext from '../../components/User/user';
export function TPPage1() {
  const {account} = useContext(UserContext);
  const JFC_ADDRESS = '0xe5d9D8EEB5b225A465523e2065834d9EC0Ed9aB8'
  const jfcBalance = useTokenBalance(JFC_ADDRESS, account)
  console.log(jfcBalance)
  //const jfcBal = formatUnits(jfcBalance, 2)
  return (
    <div>
  {parseFloat(jfcBalance) >= 339 ? (
      <>
      <AccountHeader account={account}/>
      <Linktree/>
      </>
    ) : (
        <>
        <AccountHeader account={account}/>
        <NoJFC/>
        
      </>
    )}
    
    </div>
  )
}

