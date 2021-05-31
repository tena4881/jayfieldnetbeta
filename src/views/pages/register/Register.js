import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
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
import ReactPlayer from 'react-player'

const Register = () => {
  return (
    <div className="c-app c-default-layout  flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="10" lg="8" xl="7">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <div>
                  <h1>What is MetaMask?</h1>
                {/* <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=YVgfHZMFFFQ' /> */}
                </div>
              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                 
                  <CCol xs="24" sm="12">
                    <CButton to="/"className="btn-twitter mb-1" block><span>Download</span></CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
