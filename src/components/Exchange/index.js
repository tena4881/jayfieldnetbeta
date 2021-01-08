import React from 'react';

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
  BurnBtn,
  ExchangeH22,
  StakeBtn,
  ConnectBtn
} from './ExchangeElements';
import useEthBalance from '../../useEthBalance';

const Exchange = () => {
  const balance = useEthBalance();


  return (
    <ExchangeContainer id='Exchange'>
      
      <ExchangeH1>Welcome back!</ExchangeH1>
      
      <ExchangeWrapper>
      <ExchangeCard>
        <ExchangeH2>Ξ{balance}</ExchangeH2>
        
        <ExchangeH3>In Your Wallet</ExchangeH3>

          <StakeBtn>Deposit Ethereum</StakeBtn>
          <ExchangeP>
            and earn JFLD Coins!
          </ExchangeP>
        </ExchangeCard>
      <ExchangeCard>
        <ExchangeH2>000 JFLD</ExchangeH2>
        <ExchangeP>
            (Rewards for staking)
          </ExchangeP>
        
        <ExchangeH3>In Your Wallet</ExchangeH3>

        <BurnBtn>Settel Coins</BurnBtn>
          <ExchangeP>
            What is setteling?
          </ExchangeP>
        </ExchangeCard>
        
        
        
      </ExchangeWrapper>
      
    </ExchangeContainer>
  );
};

export default Exchange;
