import React , {useState} from 'react'
import ReactDom from 'react-dom'
import {ModalCard,Input,ModalH3, UnStakeBtn, ModalP, ModalH2} from './ModalElements';


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

export default function RemovePoolModal({open, onClose}) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <ModalCard>
        <ModalH2>Remove Ξ </ModalH2>
        <ModalP>And keep your JFLD</ModalP>
        <br></br>
        <ModalH3>Ξ Amount</ModalH3>
        <form >
          <Input type="text" />
        </form>
          <UnStakeBtn to='#'>Remove from Pool </UnStakeBtn>
          
        </ModalCard>
        
      </div>
    </>,
    document.getElementById('modalPortal')
  )
}
