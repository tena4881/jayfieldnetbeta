import { useEffect, useState } from "react";
import { useMetamask } from "use-metamask";
import Web3 from "web3";
import {ExchangeH3} from './pages/Profile/Profile'
import {useStoreApi} from './storeApi';

export default function EthBalance() {
  const { metaState } = useMetamask();
  const { balance, address, message, setAddress, setBalance } = useStoreApi();
  
  
  return (
    <p>
      {Number(balance) ? (
        <>
        <ExchangeH3>
        Ξ {balance} 😲
        </ExchangeH3>
          
          
        </>
      ) : (
        "You don't have any ETH 😔"
      )}
    </p>
  );
}
