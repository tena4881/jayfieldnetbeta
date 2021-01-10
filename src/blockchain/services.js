import {AppContext} from '../components/AppContext'
import {useContext} from 'react'
import Fortmatic from 'fortmatic';
import { Magic } from 'magic-sdk';
import Web3 from 'web3';
let web3;

//const m = new Magic('pk_test_71C0DCAA672441BA');
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
 

export const GetEthBalance = async () => {
  const balances = await fm.user.getBalances();
  const ethBalance = balances.find((e) => {
    return e.crypto_currency == 'ETH';
  })
  return ethBalance.crypto_amount_display;
}



