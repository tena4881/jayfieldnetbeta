import {AppContext} from '../components/AppContext'
import {useContext} from 'react'
import Fortmatic from 'fortmatic';
import Web3 from 'web3';
let web3;
let fm = new Fortmatic('pk_live_1DE09C9877C0D25A');
web3 = new Web3(fm.getProvider());






let getInputValue = (e, name) => {
  let query = "[name='" + name + "']";
  return e.parentNode.querySelector(query).value
};

export const HandleLogin = async () => {
    // Using React ref here to prevent component re-rendering when changing
    // previous balance value
    let accounts = await fm.user.login();
      if (accounts.length > 0) {
        return accounts;
      }
    
    
  }


export const HandleLogout = async () => {
    fm.user.logout();
  }
 
  

export const getAccount = async () => {
  web3.eth.getAccounts((error, accounts) => {
    if (error) throw error;
    console.log(accounts); // ['0x...']
    return accounts[0]
  });
}


export const GetEthBalance = async () => {
  const balances = await fm.user.getBalances();
  const ethBalance = balances.find((e) => {
    return e.crypto_currency == 'ETH';
  })
  console.log(ethBalance.crypto_amount_display)
  return ethBalance.crypto_amount_display;
}


export const handleDeposit = () => {
  fm.user.deposit()
}


export const HandleComposeTransaction = (value) => {
  let to = '0x09ce806Ed04eE2011A70267A6918AD8D3202dDc1'
  let param = {};
  if (value) {
    param.amount = value;
  }
  if (to) {
    param.to = to;
  }
  fm.transactions.send(param, (err, result) => {
    console.log(err);
    console.log(result);
  })
};

