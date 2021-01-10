import {AppContext, AppContextProvider} from '../AppContext'
import React,{useState,useContext} from 'react';

import {
  ExchangeContainer,
  ConnectBtn,
  ExchangeCard,
  ExchangeH2,
  ExchangeH3,
  ExchangeH1,
  ExchangeP,
  ConnectWrapper,
  WalletSigninContainer
} from '../Exchange/ExchangeElements';

import { HandleLogin } from "../../blockchain/services";



const ConnectWallet = () => {
  const wallet = useContext(AppContext);


  const toggleLogin = () => {
      HandleLogin().then(result => {
        if(result > 0){
          wallet.setisLoggedIn(!wallet.isLoggedIn)
          console.log(result[0])
          wallet.setAccount(result[0])
        }
      })
  }



return (
    <WalletSigninContainer id='Exchange'>
      
      <div id='modalPortal'></div>
      
      
      <ConnectWrapper onClick={toggleLogin}>
     
      <ExchangeCard >
        <ExchangeH3>Welcome back!</ExchangeH3>
        <ExchangeP>Connect using your crypto wallet</ExchangeP>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ConnectBtn>Connect</ConnectBtn>
        
          
    </ExchangeCard>
      
      </ConnectWrapper>
      
    </WalletSigninContainer>
  );
  
  
};

export default ConnectWallet;
