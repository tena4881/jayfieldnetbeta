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
  ProfileCard,
  ExchangeH22,
  StakeBtn,
  ConnectBtn
} from './ExchangeElements';
import BuyModal from '../Modal/BuyModal'
import AddPoolModal from '../Modal/AddPoolModal'
import RemovePoolModal from '../Modal/RemovePoolModal'
import ProfileIcon from '../ProfileIcon/ProfileIcon';

import {AppContext} from '../AppContext'
import Lesson from '../Lesson/Lesson';

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
      <ExchangeH1>Profile Overview</ExchangeH1>
      <ExchangeWrapper>
        
      <ExchangeCard>
        <ExchangeH2>0 JFLD</ExchangeH2>
        <br></br>
        <br></br>
        <br></br>
        
        <StakeBtn to="#" onClick={() => setIsBuyOpen(true)} id="clear">Buy JFLD</StakeBtn>
        
      </ExchangeCard>
      <ExchangeCard>
        <ExchangeH2>Ξ{wallet.ethBalance}</ExchangeH2>
        <br></br>
        <br></br>
        <br></br>

        <StakeBtn to="#">Buy Ethereum</StakeBtn>
          
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
        
        
        
        
      </ExchangeWrapper>
      
    </ExchangeContainer>
  );
  
  
};

export default Exchange;
