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
import useEthBalance from '../../useEthBalance';
import { StakeModal } from '../Modal/StakeModal';

const Exchange = () => {
  const balance = useEthBalance();

  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);

  return (
    <ExchangeContainer id='Exchange'>
      
      <ExchangeH1>Welcome back!</ExchangeH1>
      
      <ExchangeWrapper>
      <ExchangeCard>
        <ExchangeH2>0 JFLD</ExchangeH2>
        
        <ExchangeH3>in Your Wallet</ExchangeH3>
        
        <StakeBtn>Buy JFLD</StakeBtn>
        
      </ExchangeCard>
      <ExchangeCard>
      <ExchangeH3>You have</ExchangeH3>
        <ExchangeH2>Ξ0</ExchangeH2>
        
        <ExchangeH3>in the pool</ExchangeH3>

          <StakeBtn>Add to Pool</StakeBtn>
          <UnStakeBtn>Remove from Pool</UnStakeBtn>
          <ExchangeP>
            and earn JFLD Coins!
          </ExchangeP>
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
