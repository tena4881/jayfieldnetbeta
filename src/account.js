import React from 'react'
import { useMetamask } from "use-metamask";
import ProfileIcon from './components/ProfileIcon/ProfileIcon';
import {AccountNum, ExchangeH4} from './pages/Profile/Profile';
export default function Account() {
    const { metaState } = useMetamask();
    return (
        <div >
            <ProfileIcon account={metaState.account[0]}></ProfileIcon>
        </div>
        
    )
}