import React from 'react'
import ReactDom from 'react-dom'
import {ModalCard,Input,ModalH3, StakeBtn, ModalP, ModalH2} from './ModalElements';
import {StakeForm} from '../Forms/StakeForm'
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
export default function AddPoolModal({open, onClose}) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <ModalCard>
        <ModalH2>Add Ξ to Pool</ModalH2>
        <ModalP>And Earn JFLD</ModalP>
        <br></br>
        <ModalH3>Ξ Amount</ModalH3>
        <StakeForm/>

        </ModalCard>
        
      </div>
    </>,
    document.getElementById('modalPortal')
  )
}
