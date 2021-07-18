import React , {useState, useContext} from 'react'
import { formatUnits , parseUnits, formatEther, parseEther} from '@ethersproject/units'
import { TransactionStatus, useContractCall, useContractFunction, useEtherBalance, useEthers } from '@usedapp/core'
import { Contract } from '@ethersproject/contracts'
import Web3 from 'web3';
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
    CSwitch,
    CWidgetDropdown
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import WalletContext from 'src/wallet'
import jfcBallotAbi from '../abi/JFLDBallotABI'
import { utils, BigNumber } from 'ethers'
export function Vote() {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  const JFBallotInterface = new utils.Interface(jfcBallotAbi)
  const {account, library } = useContext(WalletContext);
	const etherBalance = useEtherBalance(account)
  	const contract = new Contract('0x58dacE8b8f43185Fa442D66D8be93B4a7CcB7b82', JFBallotInterface, library?.getSigner())
  	const { state, send } = useContractFunction(contract, 'vote', { transactionName: 'vote' })
  	

    const voteFor = BigNumber.from(1);
    const voteAgainst = BigNumber.from(0);
	  
    const InputComponent = ({  transactionStatus, send }) => {           
      const [value, setValue] = useState('0')
      const isMining = transactionStatus === 'Mining'
      const voteForContent = isMining ? (
        <p>Loading</p>
      ) : (
        'Vote For'
      )
      const voteAgainstContent = isMining ? (
        <p>Loading</p>
      ) : (
        'Vote Against'
      )
      const voteForClick = () => {
        send(voteFor)
      }
      const voteAgainstClick = () => {
        send(voteAgainst)
      }
     
      
     
      
      return (
        <CRow>
        
        
        
        <CCol sm="12" lg="12">
        <CCard >

            <CCardHeader style={{ display: 'flex', justifyContent: 'space-between',width: 'auto', height: 'auto' }}>
           
            <h3 htmlFor="appendedInputButtons">Title</h3>
             <h5 style={{color: "green"}}>Active Proposal</h5>
            
            <CButton 
                color="link"
                className="card-header-action btn-minimize"
                onClick={() => setCollapsed(!collapsed)}
              >
                <CIcon name={ collapsed ? "cil-arrow-top" : "cil-arrow-bottom"} />
              </CButton>
            
            
            </CCardHeader>
            <CCollapse show={collapsed} timeout={1000}>
            <CCardBody>
              <CForm className="form-horizontal">
              <CFormGroup>
              
                  
                  
                  <p htmlFor="appendedInputButtons">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt vel libero sit amet bibendum. Praesent eros ligula, porttitor vel tempus sollicitudin, malesuada vitae felis. Aliquam porta nulla malesuada tincidunt facilisis. Curabitur scelerisque suscipit purus, quis mollis sem. Quisque in scelerisque elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sed sem justo. Sed non dolor eleifend, vehicula dolor ut, fermentum nulla. Praesent ac ligula orci. Vivamus accumsan ipsum vitae eros fringilla, id vulputate.</p>
                  <div className="controls">
                    <CInputGroup style={{ display: 'flex',  justifyContent:'center', alignItems:'center',width: 'auto', height: 'auto' }}>
                      
                      <CInputGroupAppend >
                      <CButton color="primary" disabled={!account || isMining} onClick={voteForClick}>{voteForContent}</CButton>
                        <CButton color="secondary" onClick={voteAgainstClick}>{voteAgainstContent}</CButton>
                       
                       
                      </CInputGroupAppend>
                    </CInputGroup>
                  </div>
                </CFormGroup>
              </CForm>
            </CCardBody>
           
          </CCollapse>
          </CCard>
        </CCol>
        
       
  
      </CRow>
      )
      }
    
    const ErrorMessage = ({ transaction }) => {
      return <h5>{'errorMessage' in transaction && transaction.errorMessage }</h5>
      }

    const TransactionForm = ({ send, transaction }) => {
      return (
        <>
        <InputComponent  transactionStatus={transaction.status} send={send}/>
        <ErrorMessage transaction={transaction} />
        </>
      )
    }
        
 return (
  
  <>
		<TransactionForm
		  balance={etherBalance}
		  send={(value) => send({ value })}
		  title="Vote"
		  transaction={state}
		/>
		
	  </>
        )
}

