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
import WalletContext from '../../wallet'
import { formatUnits , formatEther} from '@ethersproject/units'
const WidgetsDropdown = () => {
  const {etherBalance, jfcBalance} =  useContext(WalletContext)
  // render
  return (
    <CRow>
      <CCol sm="10" lg="12">
        <CWidgetDropdown
          color="gradient-primary"
          header={jfcBalance && formatUnits(jfcBalance,2)}
          text="JFC Balance"
          footerSlot={
              <><br></br></>
          }
        >
          <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="10" lg="12">
        <CWidgetDropdown
          color="gradient-info"
          header={etherBalance && (formatEther(etherBalance))}
          text="ETH Balance"
          footerSlot={
            <><br></br></>
          }
        >
          <CDropdown>
            <CDropdownToggle caret={false} color="transparent">
              <CIcon name="cil-location-pin"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3">
          <Contribute />
      </CCol>


    </CRow>
  )
}

export default WidgetsDropdown
