
import { ethers } from "ethers";
import React, { useEffect,useState } from "react";

function Connect() {
    const [account, setAccount] = useState(null);
    useEffect(() => {
        console.log({account})
      });
    
      const provider = window.ethereum.enable().then(provider = new ethers.providers.Web3Provider(window.ethereum));

      const signer = provider.getSigner();
}
export default Connect;