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
      <ExchangeH2>You have:</ExchangeH2>
      <ExchangeH22>000 JFLD</ExchangeH22>
      <br></br>
      <ExchangeWrapper>
      <ExchangeCard>
        <ExchangeH2>ETH Balance:</ExchangeH2>
        <ExchangeP>
            (Your Wallet)
          </ExchangeP>
        <ExchangeH3>Ξ{balance}</ExchangeH3>

          <StakeBtn>Deposit Ethereum</StakeBtn>
          <ExchangeP>
            and earn JFLD Coins!
          </ExchangeP>
        </ExchangeCard>
        <ExchangeCard>
        <ExchangeH2>JFLD Balance:</ExchangeH2>
        <ExchangeP>
            (Rewards for staking)
          </ExchangeP>
        <ExchangeH22>0000 JFLD</ExchangeH22>

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
