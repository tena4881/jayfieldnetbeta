import {AppContext} from '../components/AppContext'
import {useContext} from 'react'
import Fortmatic from 'fortmatic';
import Web3 from 'web3';
let web3;
let fm = new Fortmatic('pk_live_1DE09C9877C0D25A');
web3 = new Web3(fm.getProvider());





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



