import React , {useState, useContext} from 'react'
import { utils } from 'ethers'
import { formatUnits , parseUnits, formatEther, parseEther} from '@ethersproject/units'
import { TransactionStatus, useContractCall, useContractFunction, useEtherBalance, useEthers } from '@usedapp/core'
import { Contract } from '@ethersproject/contracts'

import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CCollapse,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CFade,
    CForm,
    CFormGroup,
    CFormText,
    CValidFeedback,
    CInvalidFeedback,
    CTextarea,
    CInput,
    CInputFile,
    CInputCheckbox,
    CInputRadio,
    CInputGroup,
    CInputGroupAppend,
    CInputGroupPrepend,
    CDropdown,
    CInputGroupText,
    CLabel,
    CSelect,
    CRow,
    CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import WalletContext from 'src/wallet'
import jfcVaultAbi from '../abi/jfcVaultAbi'

export function Contribute() {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  const JFVaultInterface = new utils.Interface(jfcVaultAbi)
  const {account, library } = useContext(WalletContext);
	const etherBalance = useEtherBalance(account)
  	const contract = new Contract('0x557FD4e5C433D5B4565056A42c21f7710776EE2A', JFVaultInterface, library?.getSigner())
  	const { state, send } = useContractFunction(contract, 'Contribute', { transactionName: 'Contribute' })
  
	const [amount, setAmount] = useState();

	const onClick = () => {
		console.log(parseFloat(amount))
		
	  }


	  
    const InputComponent = ({  transactionStatus, send }) => {           
      const [value, setValue] = useState('0')
      const isMining = transactionStatus === 'Mining'
      const buttonContent = isMining ? (
        <p>Loading</p>
      ) : (
        'Contribute*'
      )
      const onClick = () => {
        console.log(utils.parseEther(value.toString()))
        send((utils.parseEther(value.toString())))
        setValue('0')
      }
      
      
      return (
        <CCard style={{ width: '100%', height: '12rem' }}>
          <CCardHeader>
              Get JFC
          <div className="card-header-actions">
            
            <CButton
              color="link"
              className="card-header-action btn-minimize"
              onClick={() => setCollapsed(!collapsed)}
            >
              <CIcon name={ collapsed ? "cil-arrow-top" : "cil-arrow-bottom"} />
            </CButton>
            
          </div>
          </CCardHeader>
          <CCollapse show={collapsed} timeout={1000}>
          <CCardBody>
            <CForm className="form-horizontal">
            <CFormGroup>
                <CLabel htmlFor="appendedInputButtons">Contribute your Ether and get JFC!</CLabel>
                <div className="controls">
                  <CInputGroup>
                    <CInput value={value} onChange={(e) => setValue(e.currentTarget.value)} id="appendedInputButtons" size="20" type="number" />
                    <CInputGroupAppend>
                      <CButton color="secondary" onClick={(e) => setValue(formatEther(etherBalance)- 0.020578)}>Max ETH</CButton>
                      <CButton color="primary" disabled={!account || isMining} onClick={onClick}>Send Ether</CButton>
                    </CInputGroupAppend>
                  </CInputGroup>
                </div>
              </CFormGroup>
            </CForm>
          </CCardBody>
        </CCollapse>
        </CCard>
      )
      }
  
    const ErrorMessage = ({ transaction }) => {
      return <h5>{'errorMessage' in transaction && transaction.errorMessage}</h5>
      }

    const TransactionForm = ({ send, transaction }) => {
      return (
        <>
        <InputComponent  transactionStatus={transaction.status} send={send} />
        <ErrorMessage transaction={transaction} />
        </>
      )
    }
        
 return (
  
  <>
		<TransactionForm
		  balance={etherBalance}
		  send={(value) => send({ value })}
		  title="Wrap Ether"
		  ticker="ETH"
		  transaction={state}
		/>
		
	  </>
        )
}

