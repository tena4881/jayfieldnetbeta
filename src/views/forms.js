import {CInputGroup,CBadge, CCard, CCol,CRow,CCardHeader, CCardBody,CInputGroupPrepend,CInput, CInputGroupText} from '@coreui/react'
export function Contribute() {

 return (

  <CCard>
  <CCardHeader>
    Contribute Ether
    <div className="card-header-actions">
      {/* <CBadge color="success" className="float-right">Success</CBadge> */}
    </div>
  </CCardHeader>
  <CCardBody>
    <h6>
    Earn JFC!</h6>


    <CInputGroup className="input-prepend">
          <CInputGroupPrepend>
            <CInputGroupText>ETH</CInputGroupText>
          </CInputGroupPrepend>
          <CInput id="prependedInput" size="16" type="text" />
        </CInputGroup>

        <CInputGroup className="input-prepend">
          <CInputGroupPrepend>
            <CInputGroupText>ETH</CInputGroupText>
          </CInputGroupPrepend>
          <CInput id="prependedInput" size="16" type="text" />
        </CInputGroup>
      </CCardBody>
  </CCard>

        )
}

