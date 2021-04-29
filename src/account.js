import React from 'react'
import { useMetamask } from "use-metamask";
import ProfileIcon from './components/ProfileIcon/ProfileIcon';
import {AccountNum, ExchangeH4} from './pages/Profile/Profile';
import {  useEthers } from '@usedapp/core'
export default function Account() {
    const { account } = useEthers()
    return (
        <div >
            {account}
            {/* <ProfileIcon account={account}></ProfileIcon> */}
        </div>
        
    )
}