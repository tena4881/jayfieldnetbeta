import Linktree from "../../components/Linktree"
import NoJFC from "../../components/NoJFC";
import {  useEthers, useTokenBalance } from '@usedapp/core'
import AccountHeader from '../../components/AccountHeader/'
import { formatUnits , formatEther} from '@ethersproject/units'
export default function SocailMedia({ state, web3Handler }) {
  const JFC_ADDRESS = '0xe5d9D8EEB5b225A465523e2065834d9EC0Ed9aB8'
  const { account } = useEthers();
  const jfcBalance = useTokenBalance(JFC_ADDRESS, account)
  console.log(jfcBalance);
  return (
    
    <div>
      
      {account  ? (
      <>
        {formatUnits(jfcBalance,2) >= 100 ? (
        <>
        <AccountHeader/>
        <Linktree/>
        </>
      ) : (
          <>
          <AccountHeader/>
          <NoJFC/>
          
        </>
      )}
      </>
    ) : (
        <>
        <AccountHeader/>
        
      </>
    )}
      
    
  </div>
  );
}
