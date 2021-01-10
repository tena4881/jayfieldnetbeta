
import React, {useContext} from 'react'
import ReactDom from 'react-dom'
import {ModalCard,Input,ModalH3, StakeBtn, ModalH2} from './ModalElements';
import ProfileIcon from '../ProfileIcon/ProfileIcon'
import { AppContext } from '../AppContext';

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
  const wallet = useContext(AppContext)

  //const account = useEthAccount();
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <ModalCard>
        <ProfileIcon account={wallet.account}></ProfileIcon>
        <ModalH2>Transactions</ModalH2>
        .<br></br>
        .<br></br>
        .<br></br>
        .<br></br>
        .<br></br>
        .<br></br>
        .<br></br>
          
        </ModalCard>
        
      </div>
    </>,
    document.getElementById('modalPortal')
  )
}
