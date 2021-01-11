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
  BackBtn,
  ConnectWrapper,
  WalletSigninContainer
} from '../Exchange/ExchangeElements';

import { HandleLogin, GetEthBalance } from "../../blockchain/services";
import ResponsivePlayer from '../Video/ResponsiveVidPlayer';



const ConnectWallet = () => {
  const wallet = useContext(AppContext);


  const toggleLogin = () => {
      HandleLogin().then(result => {
        if(result > 0){
          wallet.setisLoggedIn(!wallet.isLoggedIn)
          wallet.setAccount(result[0])
          GetEthBalance().then(result2 => {
            if(result2){
              wallet.setEthBalance(result2)
            }
          })
        }
      })
      console.log(wallet.ethBalance)
  }



return (
    <WalletSigninContainer id='Exchange'>
      <div id='modalPortal'></div>
      <ConnectWrapper>
      
          <ExchangeCard onClick={toggleLogin}>
            <ExchangeH3>Welcome back!</ExchangeH3>
            <ExchangeP>Connect using your crypto wallet</ExchangeP>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <ConnectBtn >Connect</ConnectBtn>
        </ExchangeCard>
        <BackBtn to="/">Back</BackBtn>
      </ConnectWrapper>
      
    </WalletSigninContainer>
  );
  
  
};

export default ConnectWallet;
