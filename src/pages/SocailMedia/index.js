import { useEffect, useState } from "react";
import { Button } from "react-scroll";
import { useMetamask } from "use-metamask";
import Web3 from "web3";
import Linktree from "../../components/Linktree"
import NoJFC from "../../components/NoJFC";
import {useStoreApi} from '../../storeApi';
export default function SocailMedia() {
  
  

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
