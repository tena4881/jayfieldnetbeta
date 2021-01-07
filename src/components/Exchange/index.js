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
  StakeBtn
} from './ExchangeElements';

const Exchange = () => {
  return (
    <ExchangeContainer id='Exchange'>
      <ExchangeH1>Your Wallet</ExchangeH1>
      <ExchangeH3>Earn JFLD by DAI</ExchangeH3>
      <SubtitleP>
            (Deposit DAI and earn JFLD)
          </SubtitleP>
      <ExchangeWrapper>
        <ExchangeCard>
        <ExchangeH2>JFLD Balance:</ExchangeH2>
        <ExchangeP>
            (Rewards for staking)
          </ExchangeP>
        <ExchangeH3>4125 JFLD</ExchangeH3>

          <BurnBtn>Settel Coins</BurnBtn>
          <ExchangeP>
            What is setteling?
          </ExchangeP>
        </ExchangeCard>
        <ExchangeCard>
        <ExchangeH2>DAI Balance:</ExchangeH2>
        <ExchangeP>
            (Currently staking)
          </ExchangeP>
        <ExchangeH3>4125 DAI</ExchangeH3>

          <StakeBtn>Deposit DAI</StakeBtn>
          <ExchangeP>
            and earn JFLD Coins!
          </ExchangeP>
        </ExchangeCard>
      </ExchangeWrapper>
    </ExchangeContainer>
  );
};

export default Exchange;
