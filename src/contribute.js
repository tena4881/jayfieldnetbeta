import { useEffect, useState } from "react";
import { useMetamask } from "use-metamask";
import Web3 from "web3";
import {ExchangeH3} from './pages/Profile/Profile'
import {useStoreApi} from './storeApi';
import Modal from './components/Modal/Modal';

export default function Contribute() {

	const [isBuyOpen,setIsBuyOpen] = useState(false);
  const { metaState } = useMetamask();
  const { balance, address, message, setAddress, setBalance } = useStoreApi();
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
  const vaultAddress = "0x557fd4e5c433d5b4565056a42c21f7710776ee2a";
  const vaultContract = new metaState.web3.eth.Contract(VaultAbi, vaultAddress);
  var gasPrice = 20*10**9;
  var gas = 21000;
  var attoethForGas = gasPrice * gas;

  async function handle25Click(){
    var amountToSend = (Web3.utils.toWei(balance) - attoethForGas) *.25;
    await vaultContract.methods.Contribute().send({
      from: metaState.account[0],
      gas: 470000,
      value: amountToSend, // in WEI, which is equivalent to 1 ether
      gasPrice:0
     });
    
  }

  async function handle50Click(){
	var amountToSend = (Web3.utils.toWei(balance) - attoethForGas) *.5;
    await vaultContract.methods.Contribute().send({
      from: metaState.account[0],
      gas: 470000,
      value: amountToSend, // in WEI, which is equivalent to 1 ether
      gasPrice:0
     });
     
  }


  async function handle75Click(){
    var amountToSend = (Web3.utils.toWei(balance)) *.75;
    await vaultContract.methods.Contribute().send({
      from: metaState.account[0],
      gas: 470000,
      value: amountToSend, // in WEI, which is equivalent to 1 ether
      gasPrice:0
     });
    
  }

  async function handle100Click(){
    var amountToSend = (Web3.utils.toWei(balance) - attoethForGas) *.99;
    await vaultContract.methods.Contribute().send({
      from: metaState.account[0],
      gas: 470000,
      value: amountToSend, // in WEI, which is equivalent to 1 ether
      gasPrice:0
     });
    
  }
 
  return (
    <div >
    <button style={{height: 'auto', width : 'auto', marginLeft: '5px'}} onClick={handle25Click} className="btn btn-primary mt-4 waves-effect waves-light">25% {}</button>
    <button style={{height: 'auto', width : 'auto', marginLeft: '5px'}} onClick={handle50Click} className="btn btn-primary mt-4 waves-effect waves-light">50%</button>
    <button style={{height: 'auto', width : 'auto', marginLeft: '5px'}} onClick={handle75Click} className="btn btn-primary mt-4 waves-effect waves-light">75%</button>
    <button style={{height: 'auto', width : 'auto', marginLeft: '5px'}} onClick={handle100Click} className="btn btn-primary mt-4 waves-effect waves-light">100%</button>
</div>
  );
}
