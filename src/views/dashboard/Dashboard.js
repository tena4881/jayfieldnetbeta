import React, { lazy, useContext } from 'react'
import WalletContext from '../../wallet'
const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const Dashboard = () => {

  return (

    <>

      <WidgetsDropdown />
      <div>
        {/* <button onClick={activateBrowserWallet}> Connect </button> */}
        {/* {account && <button onClick={deactivate}> Disconnect </button>} */}
      </div>
      {/* Social media engagement  */}
      {/* <WidgetsBrand withCharts/> */}


    </>

  )
}

export default Dashboard
