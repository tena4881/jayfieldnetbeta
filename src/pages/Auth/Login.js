import { useEffect, useState } from "react";
import { useMetamask }         from "use-metamask";
import { ethers }              from "ethers";
import Web3                    from "web3";

import Profile from "../Profile/ProfileInfo";

function ConnectWallet() {
  const { connect, metaState } = useMetamask();
  const [ web3interface, setWeb3Interface ] = useState("web3");

  

  const handleWeb3Selector = (event) => setWeb3Interface(event.target.value);

  return (
    <div >
      {
        metaState.isAvailable
        ? <Profile state={metaState} web3Handler={handleWeb3Selector}/>
        : <div>
          <p>You don't have Metamask installed</p>
          <p>But wait, what is Metamask?</p>
          <p>
            <code>
              <a href="https://metamask.io/">https://metamask.io</a>
            </code>
          </p>
        </div>
      }
      
      
    </div>
  );
}

export default ConnectWallet;