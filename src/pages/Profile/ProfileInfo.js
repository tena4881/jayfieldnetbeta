import React   from 'react'
import Account from "../../account";
import Balance from "../../balance";
import Chain   from "../../chain";
import Exchange from "."
import Web3InterfaceSelector from "../../Web3InterfaceSelector";
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
} from './Profile';
import Footer from '../../components/Footer/footer';
export default function Profile({ state, web3Handler }) {

  function refreshPage() {
    window.location.reload(false);
  }
    return (
        <div>
        {!state.isConnected ? (
          <ProfileContainer>
    
          <WalletSigninContainer id='Exchange'>
                <div id='modalPortal'></div>
                
                <ConnectWrapper>
                
                    <ExchangeCard >
                      <ExchangeH3>Welcome back!</ExchangeH3>
                      <ExchangeP>Connect using your crypto wallet</ExchangeP>
                      
                      
                      <ConnectBtn onClick={refreshPage}>Connect</ConnectBtn>
                  </ExchangeCard>
                  <BackBtn to="/" >Back</BackBtn>
                </ConnectWrapper>
                
              </WalletSigninContainer>
              <Footer/>
          </ProfileContainer>
        ) : (
          <Exchange></Exchange>
        )}
      </div>
    )
}