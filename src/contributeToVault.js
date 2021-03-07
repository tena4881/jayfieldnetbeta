import { useEffect, useState } from "react";
import { useMetamask } from "use-metamask";
import Web3 from "web3";
import {ExchangeH3} from './pages/Profile/Profile'

const ContributeToVault = () => {
  const { metaState } = useMetamask();
  
  const VaultAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "addJFCToVault",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Contribute",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_withdrawAddr",
				"type": "address"
			},
			{
				"internalType": "contract JayFieldCoin",
				"name": "_token",
				"type": "address"
			}
		],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Contributed",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "jfcApprove",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Sold",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "Withdraw",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalanceWithdrawAddr",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContribution",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserJFCBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getVaultETHBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getVaultJFCBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract JayFieldCoin",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const coinAddress = "0x6460131c3c275927e9B8Bd2B2D528f036dce2383";
const vaultAddress = "FILL OUT ADDR";

  const vaultContract = new metaState.web3.eth.Contract(VaultAbi, vaultAddress);
  var ethBal;

  //Get User's ETH Balance
  async function getETHBal(){
    await metaState.web3.eth.getBalance(metaState.account[0]).then(function(res){
      return res;
    }).catch(function(err) {
      console.log(err);
    });
  }
  
  
  //Calc the ratios

  //Update user's contribution amount
  async function handleClick(){
    await vaultContract.methods.Contribute().send({
      from: metaState.account[0],
      gas: 470000,
      value: ethBal, // in WEI, which is equivalent to 1 ether
      gasPrice:0
     });
    
  }
  
  
  
  return (
      <>
        <div >
            <button style={{height: 'auto', width : 'auto', marginLeft: '5px'}} className="btn btn-primary mt-4 waves-effect waves-light" onClick={handleClick}>25%</button>
            <button style={{height: 'auto', width : 'auto', marginLeft: '5px'}} className="btn btn-primary mt-4 waves-effect waves-light" onClick={handleClick}>50%</button>
            <button style={{height: 'auto', width : 'auto', marginLeft: '5px'}} className="btn btn-primary mt-4 waves-effect waves-light" onClick={handleClick}>75%</button>
            <button style={{height: 'auto', width : 'auto', marginLeft: '5px'}} className="btn btn-primary mt-4 waves-effect waves-light" onClick={handleClick}>100%</button>
        </div>
      
    </>
  );
}
export default ContributeToVault;