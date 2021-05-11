import React, { lazy, useContext } from 'react'
import WalletContext from '../../wallet'
import Blog from '../widgets/Blog'
const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const Dashboard = () => {

  return (

    <>

      <Blog />
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
