import React,{useState,useContext} from 'react';

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
  ExchangeH22,
  StakeBtn,
  ConnectBtn
} from './ExchangeElements';
import BuyModal from '../Modal/BuyModal'
import AddPoolModal from '../Modal/AddPoolModal'
import RemovePoolModal from '../Modal/RemovePoolModal'
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import { HandleLogout } from "../../blockchain/services";
import {AppContext} from '../AppContext'

const Exchange = () => {
  
  

  const [isBuyOpen,setIsBuyOpen] = useState(false);
  const [isEditPoolOpen,setisEditPoolOpen] = useState(false);
  const [isRemovePoolOpen,setisRemovePoolOpen] = useState(false);
 
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
          
      <ExchangeH1>Hello!</ExchangeH1>
      <br></br>
      <ProfileIcon account={0}></ProfileIcon>
      <AccountNum>{0}</AccountNum>
      
      <ExchangeWrapper>
      <ExchangeCard>
        <ExchangeH2>0 JFLD</ExchangeH2>
        
        <ExchangeH3>in Your Wallet</ExchangeH3>
        
        <StakeBtn to="#" onClick={() => setIsBuyOpen(true)} id="clear">Buy JFLD</StakeBtn>
        
      </ExchangeCard>
      <ExchangeCard>
      <ExchangeH3>You have</ExchangeH3>
        <ExchangeH2>Ξ{0}</ExchangeH2>
        
        <ExchangeH3>in the pool</ExchangeH3>

          <StakeBtn to="#" onClick={() => setisEditPoolOpen(true)} >Add to Pool</StakeBtn>
          <ExchangeP>
            and earn JFLD Coins!
          </ExchangeP>
          
          
          <UnStakeBtn  to="#" onClick={() => setisRemovePoolOpen(true)}>Remove from Pool</UnStakeBtn>
          
        </ExchangeCard>
      <ExchangeCard>
        <ExchangeH2>0 JFLD</ExchangeH2>
        <ExchangeH3>earned</ExchangeH3>
        <ExchangeP>
            (Rewards for staking)
          </ExchangeP>
        <BurnBtn to="#">Settel Coins</BurnBtn>
          <ExchangeP>
            What is setteling?
          </ExchangeP>
        </ExchangeCard>
        
        <ExchangeCard>
        <ExchangeH2>Ξ{0}</ExchangeH2>
        
        <ExchangeH3>in Your Wallet</ExchangeH3>

        <StakeBtn to="#">Buy More Ethereum</StakeBtn>
          
          <ExchangeP>
            Provided by MoonPay
          </ExchangeP>
        </ExchangeCard>
        
        
      </ExchangeWrapper>
      
    </ExchangeContainer>
  );
  
  
};

export default Exchange;
