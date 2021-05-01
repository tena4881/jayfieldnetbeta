import { useEffect, useState } from "react";
import { useMetamask } from "use-metamask";
import Web3 from "web3";
import { Contract } from '@ethersproject/contracts'
import { Link } from "react-router-dom";
import jfcVaultAbi from './abi/jfcVaultAbi.json'
import { utils } from 'ethers'
import { TransactionStatus, useContractCall, useContractFunction, useEtherBalance, useEthers } from '@usedapp/core'


export default function Contribute() {
	const { account, library } = useEthers()
	// const jfcVaultInterface = new utils.Interface(jfcVaultAbi)
	// const vaultAddress = "0x557fd4e5c433d5b4565056a42c21f7710776ee2a";
	// const vaultContract = new Contract('0x557fd4e5c433d5b4565056a42c21f7710776ee2a', jfcVaultInterface)
	// const { state, send } = useContractCall(
	// 	account &&
    //     vaultAddress && {
    //       abi: jfcVaultAbi,
    //       address: vaultAddress,
    //       method: 'Contribute',
    //       args: [account],
    //     }
    // )
  
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
