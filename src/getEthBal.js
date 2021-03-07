import { useEffect, useState } from "react";
import { useMetamask } from "use-metamask";
import Web3 from "web3";
import {ExchangeH3} from './pages/Profile/Profile'
import {useStoreApi} from './storeApi';

export default function EthBalance() {
  const { metaState } = useMetamask();
  const { balance, address, message, setAddress, setBalance } = useStoreApi();
  
  useEffect(() => {
    const { account, isConnected, web3 } = metaState;
    
    if (account.length && isConnected && web3) {
      (async () => {
        
        await metaState.web3.eth.getBalance(metaState.account[0]).then(function(res){
          setBalance(parseFloat(res / 10 ** 18).toFixed(2));
        }).catch(function(err) {
          console.log(err);
        });
        
      })();
    }
  }, [metaState]);
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
