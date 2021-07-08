import React, { lazy, useContext } from 'react'
import WalletContext from '../../wallet'
const WidgetsDropdown = lazy(() => import('../widgets/voteWidget.js'))

const Dashboard = () => {
  
  return (

    <>
      <WidgetsDropdown />
      <div>
        
        
      </div>


    </>

  )
}

export default Dashboard
