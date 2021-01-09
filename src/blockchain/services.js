

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
        console.log(accounts)
      }
    
    return accounts;
  }


export const HandleLogout = async () => {
    fm.user.logout();
  }
//Finish this
export const getAccount = async () => {
  let address;
  web3.eth.getAccounts((err, accounts) => {
    if (err) throw err;
    address = accounts[0];
    console.log(address);
    return address;
  });
  
};