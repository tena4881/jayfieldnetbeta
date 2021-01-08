import { useCallback, useEffect, useRef, useState } from 'react';
import { ethers } from 'ethers';
import Fortmatic from 'fortmatic';

const fm = new Fortmatic('pk_live_1DE09C9877C0D25A');
let provider;
provider = new ethers.providers.Web3Provider(fm.getProvider());

// Signer represents ethereum wallet in ethers.js. You cannot just send
// transactions with only provider, you will need signer (wallet) for this.
// In our demo we use signer to query user ethereum address.
const signer = provider.getSigner();


export default function useEthBalance() {
  const [balance, setBalance] = useState(0);
  // Using React ref here to prevent component re-rendering when changing
  // previous balance value
  const prevBalanceRef = useRef(0);

  const fetchBalance = useCallback(async () => {
    const address = await signer.getAddress();

    const rawBalance = await provider.getBalance(address);
    
    // Format ETH balance and parse it to JS number
    const value = parseFloat(ethers.utils.formatEther(rawBalance)).toFixed(2);

    // Optimization: check that user balance has actually changed before
    // updating state and triggering the consuming component re-render
    if (value !== prevBalanceRef.current) {
      prevBalanceRef.current = value;
      setBalance(value);
    }
  }, []);

  useEffect(() => {
    fetchBalance();
  }, [fetchBalance]);

  

  return balance;
}