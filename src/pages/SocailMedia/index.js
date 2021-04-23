import { useEffect, useState } from "react";
import { Button } from "react-scroll";
import { useMetamask } from "use-metamask";
import Web3 from "web3";
import Linktree from "../../components/Linktree"
import NoJFC from "../../components/NoJFC";
import {useStoreApi} from '../../storeApi';
export default function SocailMedia() {
  
  const { connect, getAccounts, getChain, metaState } = useMetamask();
  
  useEffect(() => {
    if (metaState.isAvailable) {
      (async () => {
        try {
          /* you can get the information directly 
          * by assigning them to a variable, 
          * or from metaState.account and metaState.chain 
          */
          let account = await getAccounts();
          
          setAddress(account[0]);
          
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);
  const { balance, address, message, setAddress, setBalance } = useStoreApi();

  return (
    <div>
    {{balance} >= 100 ? (
      <>
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
