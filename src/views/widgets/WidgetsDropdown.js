import React, {useContext} from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {Contribute} from '../forms'
import {Withdraw} from '../adminForm'
import WalletContext from '../../wallet'
import { formatUnits , formatEther} from '@ethersproject/units'
import {Chart} from '../widgets/chart'
const WidgetsDropdown = () => {
  const {etherBalance, jfcBalance} =  useContext(WalletContext)
  // render
  return (
    <CRow>
      <CCol sm="6" lg="6">
        <CWidgetDropdown
          color="gradient-primary"
          header={jfcBalance && formatUnits(jfcBalance,2)}
          text="JFC Balance"
          footerSlot={
              <><br></br></>
          }
          style={{ width: '100%', height: '12rem' }}
          >
          
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="6">
        <CWidgetDropdown
          color="gradient-info"
          header={etherBalance && (formatEther(etherBalance))}
          text="ETH Balance"
          footerSlot={
            <><br></br></>
          }
          style={{ width: '100%', height: '12rem' }}>
          
        </CWidgetDropdown>
      </CCol>
      <CCol sm="12" lg="12">
          <Contribute />
      </CCol>
      
      <CCol sm="12" lg="12">
          <Chart/>
      </CCol>
      <CCol sm="6" lg="6">
          <Withdraw />
      </CCol>


    </CRow>
  )
}

export default WidgetsDropdown
