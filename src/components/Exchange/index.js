import React,{useState,useContext} from 'react';
import TradingViewWidget, { Themes, BarStyles,IntervalTypes }  from 'react-tradingview-widget';

import {
  ExchangeContainer,
  ExchangeH1,
  ExchangeWrapper,
  ProfileContainer,
  ExchangeCard,
  ExchangeIcon,
  ExchangeH2,
  ExchangeH3,
  SubtitleP,
  ExchangeP,
  AccountNum,
  UnStakeBtn,
  BurnBtn,
  ProfileCard,
  ExchangeH22,
  StakeBtn,
  ChartCard,
  ConnectBtn
} from './ExchangeElements';
import BuyModal from '../Modal/BuyModal'
import WalletModal from '../Modal/WalletModal'
import AddPoolModal from '../Modal/AddPoolModal'
import RemovePoolModal from '../Modal/RemovePoolModal'
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import {handleDeposit} from '../../blockchain/services'
import {AppContext} from '../AppContext'
import Lesson from '../Lesson/Lesson';
import { themesList } from 'web3modal';
import {useStoreApi} from '../../storeApi';
import ConnectWallet from '../WalletConn';
import Footer from '../../components/Footer';

const Exchange = () => {
  
  const [isBuyOpen,setIsBuyOpen] = useState(false);
  const [isEditPoolOpen,setisEditPoolOpen] = useState(false);
  const [isRemovePoolOpen,setisRemovePoolOpen] = useState(false);
  const [isWalletOpen,setisWalletOpen] = useState(false);
  const { balance, address, message, setAddress, setBalance } = useStoreApi();
 if(address == null){
  return(
    <ConnectWallet></ConnectWallet>
  )
 }
  
return (
  <ProfileContainer>
    <ExchangeContainer id='Exchange'>
      <div id='modalPortal'></div>
      
      
      <BuyModal open={isBuyOpen} onClose={() => setIsBuyOpen(false)}>
            Modal
          </BuyModal>
          <AddPoolModal open={isEditPoolOpen} onClose={() => setisEditPoolOpen(false)}>
            Modal
          </AddPoolModal>
          <RemovePoolModal open={isRemovePoolOpen} onClose={() => setisRemovePoolOpen(false)}>
            Modal
          </RemovePoolModal>
          <WalletModal open={isWalletOpen} onClose={() => setisWalletOpen(false)}></WalletModal>
          <ProfileCard>
    
      <ProfileIcon account={address}></ProfileIcon>
      <AccountNum>{address}</AccountNum>
      </ProfileCard>
      <ExchangeH3>Profile Overview</ExchangeH3>
      <ExchangeWrapper>
        
      <ExchangeCard>
        <ExchangeH2>{balance} ETH</ExchangeH2>
        <br></br>
        <br></br>
        <br></br>
        
        
        
      </ExchangeCard>
      
      <ExchangeCard>
      <ExchangeH3>You have Contributed</ExchangeH3>
        <ExchangeH2>Ξ{0}</ExchangeH2>
        
        <ExchangeH3>in the pool</ExchangeH3>

          
          <ExchangeP>
            Earn JayField Coins!
            <br></br>
            Coming Soon!
          </ExchangeP>
          
          
          
        </ExchangeCard>

        
      <ChartCard>
      <ExchangeH3>Price of ETH</ExchangeH3>
      <TradingViewWidget
        symbol="ETHUSD"
        theme={Themes.LIGHT}
        style='2'
        locale="fr"
        autosize
      />
          
          
        </ChartCard>
        
      
        
        
        
        
      </ExchangeWrapper>
      
    </ExchangeContainer>
    <Footer/>
    </ProfileContainer>
  );
  
  
};

export default Exchange;
