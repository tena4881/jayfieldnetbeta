import { ethers } from "ethers";

let provider;





if (window.web3) {
    window.ethereum.enable().then(provider = new ethers.providers.Web3Provider(window.ethereum));
    window.ethereum.enable();
    const signer = provider.getSigner();
  }

export default provider;