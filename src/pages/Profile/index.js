import React,{useState, useContext} from 'react';
import TradingViewWidget, { Themes, BarStyles,IntervalTypes }  from 'react-tradingview-widget';
import   Contribute from '../../contribute';
import { Link } from "react-router-dom";
import {  useEthers } from '@usedapp/core'
import { formatUnits } from '@ethersproject/units'
import AccountHeader from '../../components/AccountHeader/'
import {
  ExchangeContainer,
  ExchangeWrapper,
  ProfileContainer,
  ExchangeCard,
  ExchangeH2,
  ExchangeH3,
  ExchangeH4W,
  ExchangeH4B,
  ExchangeH1,
  ExchangeP,
  AccountNum,
  ProfileCard,
  ExchangeH2W,
  ExchangeH3W,
  BalanceCard,
  ExchangePW,
  ExchangeH4Link,
  ConnectBtn,
  ChartCard,
  ExchangeCard2,
  ExchangeH4
} from './Profile';
import {JFCBalance, EtherBalance} from '../../balance'
import ProfileNavbar from '../../components/Navbar/ProfileNavBar';
import ProfileSidebar from '../../components/Navbar/ProfileSideBar';
import UserContext from '../../components/User/user';

export default function Exchange(){
  
  const [isOpen, setIsOpen] = useState(false);  
  const toggle = () => {
    setIsOpen(!isOpen);
    
  };
  const tokenAddress = '0xe5d9D8EEB5b225A465523e2065834d9EC0Ed9aB8';
  const tokenSymbol = 'JFC';
  const tokenDecimals = 2;
  const tokenImage = 'https://ipfs.fleek.co/ipfs/bafybeibigw72plrzzkg7lby2mdqkfwvwgnvohwi7ycovzsoejkr5ndhf4e';
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
  const {account} = useContext(UserContext);
  
  //const userBalance = useEtherBalance(account)
  //const JFCBalance = useTokenBalance(account, tokenAddress)

return (

  
  <div>
    {account ? (
                <>
                {/* <ProfileNavbar toggle={toggle} />
              <ProfileSidebar isOpen={isOpen} toggle={toggle} /> */}
              <ExchangeContainer id='Exchange'>
                      {/* <AccountHeader/> */}
                      <ExchangeH3>Hello:</ExchangeH3>
                      <ExchangeH4B>{account} ,</ExchangeH4B>
                      <ExchangeH3><br></br>Welcome to your</ExchangeH3>
                     <ExchangeH4>Digital Dashboard</ExchangeH4>
                <ExchangeWrapper>
                   <ExchangeCard>
                     <ExchangeH2 >JFC Balance:</ExchangeH2>
                     <JFCBalance/>
                    </ExchangeCard>
                    <ExchangeCard2>
                      <ExchangeH3W >Ether Balance</ExchangeH3W>\
                      <EtherBalance/>
                      <ExchangeH2><br></br></ExchangeH2>
                      <Contribute/>
                    </ExchangeCard2>

                  <BalanceCard>

                    <ExchangeH4Link to='/connect'>Explore The Brain</ExchangeH4Link>
                    </BalanceCard>

      
                <ChartCard>
                  
                  <TradingViewWidget
                    symbol="ETHUSD"
                    theme={Themes.LIGHT}
                    style='2'
                    locale="fr"
                    autosize
                  />
                </ChartCard>
              </ExchangeWrapper>
              <Link onClick={addToMetamask}>Don't see JFC in your MetaMask?</Link>
            </ExchangeContainer>
            </>
            ) : (
            <>
            <AccountHeader/>
            </>
            )}
      
            
            
       
    </div>
  );
  
  
};
