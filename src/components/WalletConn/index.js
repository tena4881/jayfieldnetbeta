import {AppContext, AppContextProvider} from '../AppContext'
import React,{useState,useContext} from 'react';
import {useStoreApi} from '../../storeApi';
import {useWeb3} from '../../getWeb3';

import {
  ExchangeContainer,
  ConnectBtn,
  ExchangeCard,
  ExchangeH2,
  ExchangeH3,
  ProfileContainer,
  ExchangeH1,
  ExchangeP,
  BackBtn,
  ConnectWrapper,
  WalletSigninContainer
} from '../Exchange/ExchangeElements';

import { HandleLogin, GetEthBalance } from "../../blockchain/services";
import ResponsivePlayer from '../Video/ResponsiveVidPlayer';
import Footer from '../Footer';



const ConnectWallet = () => {
  const { balance, address, message, setAddress, setBalance } = useStoreApi();
  const web3 = useWeb3();
  
  // get user account on button click
  const getUserAccount = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        web3.eth.getAccounts().then(accounts => {
          setAddress(accounts[0]);
          updateBalance(accounts[0]);
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Metamask extensions not detected!");
    }
  };


  const updateBalance = async fromAddress => {
    await web3.eth.getBalance(fromAddress).then(value => {
      setBalance(web3.utils.fromWei(value, "ether"));
    });
  };



return (
  <ProfileContainer>
  <WalletSigninContainer id='Exchange'>
        <div id='modalPortal'></div>
        <ConnectWrapper>
        
            <ExchangeCard onClick={() => getUserAccount()}>
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
      <Footer/>
  </ProfileContainer>
    
    
  );
  
  
};

export default ConnectWallet;
