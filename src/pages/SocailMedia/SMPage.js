import Linktree from "../../components/Linktree"
import NoJFC from "../../components/NoJFC";
import {  useEthers, useTokenBalance } from '@usedapp/core'
import AccountHeader from '../../components/AccountHeader/'
import {TPPage1} from './tpp'
import { formatUnits , formatEther} from '@ethersproject/units'
export default function SocailMedia({ state, web3Handler }) {
  const { activateBrowserWallet,deactivate,account} = useEthers();
  
  return (
    
    <div>
      
      {account  ? (
      <>
        <TPPage1 account={account}/>
      </>
    ) : (
        <>
        <AccountHeader account={account}/>
        
      </>
    )}
      
    
  </div>
  );
}
