import React from 'react'
import ReactDom from 'react-dom'
import {ModalCard,Input,ModalH3, StakeBtn, ModalH2} from './ModalElements';
import {
    ExchangeContainer,
    ConnectBtn,
    ExchangeCard,
    ExchangeH2,
    ExchangeH3,
    ExchangeH1,
    ExchangeP,
    BackBtn,
    ConnectWrapper,
    WalletSigninContainer
  } from '../Exchange/ExchangeElements';

 import {ConnectWallet} from '../../blockchain/services';

import {useStoreApi} from '../../storeApi';
import {useWeb3} from '../../getWeb3';



const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'transparent',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({open, onClose}) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <WalletSigninContainer id='Exchange'>
      <div id='modalPortal'></div>
      <ConnectWrapper>
      
          <ExchangeCard onClick={() => ConnectWallet}>
            <ExchangeH3>Welcome back!</ExchangeH3>
            <ExchangeP>Connect using your crypto wallet</ExchangeP>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <ConnectBtn >Connect</ConnectBtn>
        </ExchangeCard>
        <BackBtn to="/">Back</BackBtn>
      </ConnectWrapper>
      
    </WalletSigninContainer>
    </>,
    document.getElementById('modalPortal')
  )
}
