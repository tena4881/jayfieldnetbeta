
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
} from '../Profile/Profile';
import Footer from '../../components/Footer/footer';








const ConnectWallet = () => {
  const { balance, address, message, setAddress, setBalance } = useStoreApi();
  const web3 = useWeb3();
  

  


return (
  <ProfileContainer>
  <WalletSigninContainer id='Exchange'>
        <div id='modalPortal'></div>
        <ConnectWrapper>
        
            <ExchangeCard >
              <ExchangeH3>Welcome back!</ExchangeH3>
              <ExchangeP>Connect using your crypto wallet</ExchangeP>
              
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
