import {AppContext} from '../AppContext'
import React,{useState,useContext} from 'react';

import {
  ExchangeContainer,
  ConnectBtn,
  ExchangeCard,
  ExchangeH2,
  ExchangeH3,
  ExchangeH1,
  ExchangeP,
  ConnectWrapper
} from '../Exchange/ExchangeElements';

import { HandleLogin } from "../../blockchain/services";



const ConnectWallet = () => {

  const [isLoggedIn, setisLoggedIn] = useContext(AppContext);
  const toggleLogin = () => {
      HandleLogin().then(result => {
        if(result > 0){
          setisLoggedIn(!isLoggedIn)
        }
      })
  }


return (
    <ExchangeContainer id='Exchange'>
      
      <div id='modalPortal'></div>
      
      
      <ConnectWrapper>
     
      <ExchangeCard>
        <ExchangeH3>Welcome back!</ExchangeH3>
        <ExchangeP>(We missed you)</ExchangeP>
          <ConnectBtn onClick={toggleLogin}>Connect Your Wallet</ConnectBtn>
        
          
    </ExchangeCard>
      
      </ConnectWrapper>
      
    </ExchangeContainer>
  );
  
  
};

export default ConnectWallet;
