import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import WalletContext from '../../../wallet';

const Login = props => {
  const {activateBrowserWallet} = useContext(WalletContext);

  function connectWallet() {
    activateBrowserWallet().then(function(result) {
      console.log(result); // "Promise resolved successfully"
   }, err => {
      console.log(err); // Error: "Promise rejected"
   });
  }
  return (
    <div className="c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                <h1>Login</h1>
                    <p className="text-muted">Connect using your wallet</p>


                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4"
                          onClick={connectWallet} >Connect</CButton>
                      </CCol>

                    </CRow>
                  
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 " style={{ width: '100%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>New Member?</h2>
                    <p>Download a Web3 browser for the JayFieldNETwork experience!</p>
                    <Link onClick={()=> window.open("https://metamask.io/download", "_blank")}>
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>MetaMask</CButton>
                    </Link>
                    <Link onClick={()=> window.open("https://trustwallet.com/deeplink/", "_blank")}>
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Trust</CButton>
                    </Link>
                    <Link onClick={()=> window.open("https://www.opera.com/download", "_blank")}>
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Opera </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
