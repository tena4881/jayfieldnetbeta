import React from 'react';
import Icon1 from '../../images/JayFieldTokenT.GIF';
import Icon2 from '../../images/dai.svg';
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
          <ExchangeH2>View your JFLD coin Balance</ExchangeH2>
          <ExchangeP>
            
            Coming soon! <br></br>
            In the meantime make sure you have MetaMask installed! 
          </ExchangeP>
        </ExchangeCard>
        <ExchangeCard>
          <ExchangeIcon src={Icon2} />
          <ExchangeH2>View your staked DIA Balance</ExchangeH2>
          <ExchangeP>
            You can view, contibute to, and withdraw your stake at any time! <br></br>
            Coming Soon!
          </ExchangeP>
        </ExchangeCard>
      </ExchangeWrapper>
    </ExchangeContainer>
  );
};

export default Exchange;
