import { useCallback, useEffect, useRef, useState } from 'react';
import { ethers } from 'ethers';
import Fortmatic from 'fortmatic';

const fm = new Fortmatic('pk_live_1DE09C9877C0D25A');
let provider;
provider = new ethers.providers.Web3Provider(fm.getProvider());


// Signer represents ethereum wallet in ethers.js. You cannot jussigt send
// transactions with only provider, you will need signer (wallet) for this.
// In our demo we use signer to query user ethereum address.
const signer = provider.getSigner();


export default function useEthAccount() {
  const [account, setAccount] = useState(0);
  // Using React ref here to prevent component re-rendering when changing
  // previous balance value
  const prevAccountRef = useRef(0);

  const fetchAccount = useCallback(async () => {
    const address = await signer.getAddress();
    

    const value = ethers.utils.getAddress(address);
    // Optimization: check that user balance has actually changed before
    // updating state and triggering the consuming component re-render
    if (value !== prevAccountRef.current) {
      prevAccountRef.current = value;
      setAccount(value);
    }
  }, []);

  useEffect(() => {
    fetchAccount();
  }, [fetchAccount]);

  

  return account;
}