import React, {useContext} from 'react'
import ProfileIcon from '../../components/ProfileIcon/ProfileIcon';
import {AccountNum, ExchangeH3, JFCBalanceHead, ProfileCard} from '../../pages/Profile/Profile';
import {  useEthers, useTokenBalance } from '@usedapp/core'
import { formatUnits , formatEther} from '@ethersproject/units'
import {JFCBalanceBlack} from '../../balance'
import UserContext from '../../components/User/user';
import hashAvatar from 'hash-avatar'
 

// => It will return a SVG
export default function AccountHeader() {

  
    const JFC_ADDRESS = '0xe5d9D8EEB5b225A465523e2065834d9EC0Ed9aB8'
    const {activateBrowserWallet, account,deactivate} = useContext(UserContext);

    return (
        
        <ProfileCard>
            {account ? (
      
                <>
                {/* <ProfileIcon account={{account}}></ProfileIcon> */}
                <AccountNum >{account}</AccountNum>
                <JFCBalanceBlack/>
                {/* <button className="btn btn-primary mt-2 waves-effect waves-light" onClick={() => deactivate()}>Disconnect</button> */}
            </>
            ) : (
            <>
            <ExchangeH3>No wallet connected 😔</ExchangeH3>
            <button className="btn btn-primary mt-2 waves-effect waves-light" onClick={() => activateBrowserWallet()}>Connect</button>
            </>
            )}
        </ProfileCard>
    )
}