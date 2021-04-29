import { useEffect, useState } from "react";
import { useMetamask } from "use-metamask";
import Web3 from "web3";
import { Contract } from '@ethersproject/contracts'
import { Link } from "react-router-dom";
import jfcVaultAbi from './abi/jfcVaultAbi.json'
import { utils } from 'ethers'
import { TransactionStatus, useContractCall, useContractFunction, useEtherBalance, useEthers } from '@usedapp/core'


export default function Contribute() {
	//const { account, library } = useEthers()
	const jfcVaultInterface = new utils.Interface(jfcVaultAbi)
	const vaultAddress = "0x557fd4e5c433d5b4565056a42c21f7710776ee2a";
	const { metaState } = useMetamask();
	const vaultContract = new Contract('0x557fd4e5c433d5b4565056a42c21f7710776ee2a', jfcVaultInterface)
	//const { state, send } = useContractFunction(vaultContract, 'deposit')
  
	var gasPrice = 20*10**9;
	var gas = 21000;
	var attoethForGas = gasPrice * gas;
	const [amount, setAmount] = useState();

	const handleSubmit = async event => {
		
		event.preventDefault();
		//send(amount);
		console.log(amount)
	}
	

  
 

  return (
	  <>
	  <form onSubmit={e => {handleSubmit(e)}}>
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
		<button style={{height: 'auto', width : 'auto', marginLeft: '5px'}} type="button" onClick={handleSubmit} className="btn btn-primary mt-4 waves-effect waves-light">Submit</button>
		</div>
	  </form>
    

</>
  );
}
