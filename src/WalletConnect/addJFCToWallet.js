
import React,{useState,useContext} from 'react';
import {useStoreApi} from '../storeApi';
import {useWeb3} from '../getWeb3';
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
  WalletSigninContainer,
  AddToWalletBTN
} from '../pages/Profile/Profile';
import Footer from '../components/Footer/footer';

const addToWallet = () => {
    const tokenAddress = '0xe5d9d8eeb5b225a465523e2065834d9ec0ed9ab8';
    const tokenSymbol = 'JFC';
    const tokenDecimals = 2;
    const tokenImage = 'https://ipfs.fleek.co/ipfs/bafybeibigw72plrzzkg7lby2mdqkfwvwgnvohwi7ycovzsoejkr5ndhf4e';
  
    
    
    const coinAddress = "0xe5d9D8EEB5b225A465523e2065834d9EC0Ed9aB8";

    
    //WHAT ARE THER REWARDS FOR COMPLEATING THIS TASK
    async function addToMetamask(){
        let ethereum = window.ethereum;
        try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await ethereum.request({
            method: 'wallet_watchAsset',
            params: {
            type: 'ERC20', // Initially only supports ERC20, but eventually more!
            options: {
                address: tokenAddress, // The address that the token is at.
                symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                decimals: tokenDecimals, // The number of decimals in the token
                image: tokenImage, // A string url of the token logo
            },
            },
        });
        
        if (wasAdded) {
            console.log('Thanks for your interest!');
        } else {
            console.log('Your loss!');
        }
        } catch (error) {
        console.log(error);
        }
    }


return (
	
  <ProfileContainer>
  <WalletSigninContainer id='Exchange'>
        <ConnectWrapper>
        
            <ExchangeCard>
			<img
                    alt="hero"
                    src='../assets/images/logoblack.png'
                  />
              <ExchangeH3>Don't see JFC in your wallet?</ExchangeH3>
			  <ExchangeP>Add it by clicking below!</ExchangeP>
              
              <AddToWalletBTN to='/profile' onClick={addToMetamask}>Add JFC to Metamask</AddToWalletBTN>
          </ExchangeCard>
          <BackBtn to="/">Back Home</BackBtn>
        </ConnectWrapper>
        
      </WalletSigninContainer>
      
      
  </ProfileContainer>
    
    
  );
  
  
};

export default addToWallet;
