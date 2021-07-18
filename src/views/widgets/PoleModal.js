import React, { useState, useContext,Fragment } from "react";
// import ReactDOM from "react-dom";
import Poll from "react-polls";
import { utils } from 'ethers'
import { formatUnits , parseUnits, formatEther, parseEther} from '@ethersproject/units'
import { TransactionStatus, useContractCall, useContractFunction, useEtherBalance, useEthers } from '@usedapp/core'
import { Contract } from '@ethersproject/contracts'
import WalletContext from 'src/wallet'
import JFLDBallotABI from '../../abi/JFLDBallotABI'

const JFBallotInterface = new utils.Interface(JFLDBallotABI)
const PollModal = (props) => {
  const [question] = useState("What shall be done with inactive JayFieldNet members?");
  const { state, send } = useContractFunction(contract, 'vote', { transactionName: 'vote' })
  const pollAnswers = [
    { option: "Boot them", votes: 0 },
    { option: "Boot them & reallocate spots", votes: 0 },
    { option: "Keep Them", votes: 0 },
    { option: "Keep them and open more spots", votes: 0 },
  ];
  const {account, library } = useContext(WalletContext);
  //CHANGE TO BALLOT address 
  const contract = new Contract('0x29cc5b56c25a7a2fcd933f4936e46347a648b427', JFBallotInterface,library?.getSigner())
  
  const handleVote = async (e) => {
    
    send(e)
  };
  

  
 
  return (
    <>
      <div>
        <Poll
          question={question}
          answers={pollAnswers}
          onVote={(e) => handleVote(e)}
          noStorage
        />
      </div>
    </>
  );
};


export default PollModal;
