import { useCallback, useEffect, useRef, useState } from 'react';
import { ethers } from 'ethers';



export default function connect() {
  // Ethers.js provides functionality to query data from ethereum blockchain.
// We can use `Web3Provider` class to construct a wrapper for
// web3-compatible provider which we receive from Fortmatic.
let provider;
window.ethereum.enable();
provider = new ethers.providers.Web3Provider(window.ethereum);

// Signer represents ethereum wallet in ethers.js. You cannot just send
// transactions with only provider, you will need signer (wallet) for this.
// In our demo we use signer to query user ethereum address.
const signer = provider.getSigner();
  
}

