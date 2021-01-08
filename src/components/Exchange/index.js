import React,{useState} from 'react';

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
  UnStakeBtn,
  BurnBtn,
  ExchangeH22,
  StakeBtn,
  ConnectBtn
} from './ExchangeElements';
import useEthBalance from '../../blockchain/useEthBalance';
import BuyModal from '../Modal/BuyModal'
import AddPoolModal from '../Modal/AddPoolModal'
import RemovePoolModal from '../Modal/RemovePoolModal'
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import useEthAccount from '../../blockchain/useEthAccount';


const Exchange = () => {
  const balance = useEthBalance();
  const account = useEthAccount();
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
          
      <ExchangeH1>Welcome back,</ExchangeH1>
      <ProfileIcon account={account}></ProfileIcon>
      <div>{account}</div>
      
      <ExchangeWrapper>
      <ExchangeCard>
        <ExchangeH2>0 JFLD</ExchangeH2>
        
        <ExchangeH3>in Your Wallet</ExchangeH3>
        
        <StakeBtn onClick={() => setIsBuyOpen(true)}>Buy JFLD</StakeBtn>
        
      </ExchangeCard>
      <ExchangeCard>
      <ExchangeH3>You have</ExchangeH3>
        <ExchangeH2>Ξ0</ExchangeH2>
        
        <ExchangeH3>in the pool</ExchangeH3>

          <StakeBtn onClick={() => setisEditPoolOpen(true)} >Add to Pool</StakeBtn>
          <ExchangeP>
            and earn JFLD Coins!
          </ExchangeP>
          
          
          <UnStakeBtn onClick={() => setisRemovePoolOpen(true)}>Remove from Pool</UnStakeBtn>
          
        </ExchangeCard>
      <ExchangeCard>
        <ExchangeH2>0 JFLD</ExchangeH2>
        <ExchangeH3>earned</ExchangeH3>
        <ExchangeP>
            (Rewards for staking)
          </ExchangeP>
        <BurnBtn>Settel Coins</BurnBtn>
          <ExchangeP>
            What is setteling?
          </ExchangeP>
        </ExchangeCard>
        
        <ExchangeCard>
        <ExchangeH2>Ξ{balance}</ExchangeH2>
        
        <ExchangeH3>in Your Wallet</ExchangeH3>

        <StakeBtn>Buy More Ethereum</StakeBtn>
          
          <ExchangeP>
            Provided by MoonPay
          </ExchangeP>
        </ExchangeCard>
        
        
      </ExchangeWrapper>
      
    </ExchangeContainer>
  );
};

export default Exchange;
