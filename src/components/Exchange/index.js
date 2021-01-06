import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-5.svg';
import {
  ExchangeContainer,
  ExchangeH1,
  ExchangeWrapper,
  ExchangeCard,
  ExchangeIcon,
  ExchangeH2,
  ExchangeP
} from './ExchangeElements';

const Exchange = () => {
  return (
    <ExchangeContainer id='Exchange'>
      <ExchangeH1>Your Wallet</ExchangeH1>
      <ExchangeWrapper>
        <ExchangeCard>
          <ExchangeIcon src={Icon1} />
          <ExchangeH2>Reduce Expenses</ExchangeH2>
          <ExchangeP>
            We help reduce your fees and increase your overall revenue.
          </ExchangeP>
        </ExchangeCard>
        <ExchangeCard>
          <ExchangeIcon src={Icon2} />
          <ExchangeH2>Virtual Offices</ExchangeH2>
          <ExchangeP>
            You can access our platform online anywhere in the world.
          </ExchangeP>
        </ExchangeCard>
      </ExchangeWrapper>
    </ExchangeContainer>
  );
};

export default Exchange;
