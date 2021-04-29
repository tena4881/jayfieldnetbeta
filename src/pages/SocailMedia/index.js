import Linktree from "../../components/Linktree"
import NoJFC from "../../components/NoJFC";
import {  useEthers } from '@usedapp/core'
import AccountHeader from '../../components/AccountHeader/'
export default function SocailMedia({ state, web3Handler }) {
  const { account } = useEthers();
  return (
    
    <div>
    {account ? (
      <>
      <AccountHeader/>
      <Linktree/>
      </>
    ) : (
        <>
        <NoJFC/>
        
      </>
    )}
  </div>
  );
}
