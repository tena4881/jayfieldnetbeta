import { useEffect, useState } from "react";
import { useMetamask } from "use-metamask";
import Web3 from "web3";
import { Contract } from '@ethersproject/contracts'
import { Link } from "react-router-dom";
import jfcVaultAbi from './abi/jfcVaultAbi.json'
import { utils } from 'ethers'
import { TransactionStatus, useContractCall, useContractFunction, useEtherBalance, useEthers } from '@usedapp/core'

const JFVaultInterface = new utils.Interface(jfcVaultAbi)
export default function Contribute() {
	const etherBalance = useEtherBalance(account)
  	const contract = new Contract('0x557FD4e5C433D5B4565056A42c21f7710776EE2A', JFVaultInterface, library?.getSigner())
  	const { state, send } = useContractFunction(contract, 'Contribute', { transactionName: 'Contribute' })
  
	const [amount, setAmount] = useState();

	const onClick = () => {
		console.log(parseFloat(amount))
		
	  }
	

  
 

  return (
	  
	  <>
	  <form onSubmit={onClick}>
        <br />
        <input 
          name='amount' 
          type='text'
          onChange={e => setAmount(e.target.value) }
		  value={amount}
		  placeholder={"Enter ETH Amount"}
		  type="number"
		  min="0.1"
        />
		<br>
		</br>
		<div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
		<button style={{height: 'auto', width : 'auto', marginLeft: '5px'}} type="button" onClick={onClick} className="btn btn-primary mt-4 waves-effect waves-light">Submit</button>
		</div>
	  </form>
    

</>
  );
}
