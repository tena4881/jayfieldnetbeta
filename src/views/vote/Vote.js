import React, { lazy, useContext } from 'react'
import WalletContext from '../../wallet'
const VoteModal = lazy(() => import('../widgets/voteWidget.js'))

const Dashboard = () => {
  
  return (

    <>
      <VoteModal />
      


    </>

  )
}

export default Dashboard
