import React , {useState, useContext} from 'react'
import TradingViewWidget, { Themes }  from 'react-tradingview-widget';

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

export function Chart() {
 
  
  const [collapsed, setCollapsed] = React.useState(true)
  
    
 return (
  
  <>
    <CCard >
    <CCardHeader>
            Price of Ether
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
          <CCardBody style={{ width: '100%', height: '35rem' }}>
          <TradingViewWidget
                    symbol="ETHUSD"
                    theme={Themes.LIGHT}
                    style='2'
                    locale="us"
                    autosize
                  />
          </CCardBody>
        </CCollapse>
    
		
    </CCard>
	
	  </>
        )
}

