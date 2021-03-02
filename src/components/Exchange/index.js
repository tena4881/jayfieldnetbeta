import React,{useState,useContext} from 'react';
import TradingViewWidget, { Themes, BarStyles,IntervalTypes }  from 'react-tradingview-widget';

import {
  ExchangeContainer,
  ExchangeH1,
  ExchangeWrapper,
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
import AddPoolModal from '../Modal/AddPoolModal'
import RemovePoolModal from '../Modal/RemovePoolModal'
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import {handleDeposit} from '../../blockchain/services'
import {AppContext} from '../AppContext'
import Lesson from '../Lesson/Lesson';
import { themesList } from 'web3modal';

const Exchange = () => {
  
  const [isBuyOpen,setIsBuyOpen] = useState(false);
  const [isEditPoolOpen,setisEditPoolOpen] = useState(false);
  const [isRemovePoolOpen,setisRemovePoolOpen] = useState(false);
  const wallet = useContext(AppContext);

 
return (
  
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
          <ProfileCard>
    
      <ProfileIcon account={wallet.account}></ProfileIcon>
      <AccountNum>{wallet.account}</AccountNum>
      </ProfileCard>
      <ExchangeH3>Profile Overview</ExchangeH3>
      <ExchangeWrapper>
        
      <ExchangeCard>
        <ExchangeH2>0 JFC</ExchangeH2>
        <br></br>
        <br></br>
        <br></br>
        
        
        
      </ExchangeCard>
      
      <ExchangeCard>
      <ExchangeH3>You have Contributed</ExchangeH3>
        <ExchangeH2>Ξ{0}</ExchangeH2>
        
        <ExchangeH3>in the pool</ExchangeH3>

          <StakeBtn to="#" onClick={() => setisEditPoolOpen(true)} >Add to Pool</StakeBtn>
          <ExchangeP>
            and earn JayField Coins!
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
  );
  
  
};

export default Exchange;
