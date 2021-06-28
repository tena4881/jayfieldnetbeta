import React, {useContext} from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {Contribute} from '../forms'
import {Withdraw} from '../adminForm'
import WalletContext from '../../wallet'
import { formatUnits , formatEther} from '@ethersproject/units'
import {Chart} from '../widgets/chart'
const WidgetsDropdown = () => {
  const tokenAddress = '0xe5d9D8EEB5b225A465523e2065834d9EC0Ed9aB8';
  const tokenSymbol = 'JFC';
  const tokenDecimals = 2;
  const tokenImage = 'https://ipfs.fleek.co/ipfs/bafybeibigw72plrzzkg7lby2mdqkfwvwgnvohwi7ycovzsoejkr5ndhf4e';
    //WHAT ARE THER REWARDS FOR COMPLEATING THIS TASK
    async function addToMetamask(){
      let ethereum = window.ethereum;
      try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await ethereum.request({
          method: 'wallet_watchAsset',
          params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
              address: tokenAddress, // The address that the token is at.
              symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
              decimals: tokenDecimals, // The number of decimals in the token
              image: tokenImage, // A string url of the token logo
          },
          },
      });
      
      if (wasAdded) {
          console.log('Thanks for your interest!');
      } else {
          console.log('Your loss!');
      }
      } catch (error) {
      console.log(error);
      }
  }
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
           <CLink className="addJFCBTN" onClick={addToMetamask}>Don't see JFC in your MetaMask?</CLink>
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
