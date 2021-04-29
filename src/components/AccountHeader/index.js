import React from 'react'
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import {AccountNum, ExchangeH3, ProfileCard} from '../../pages/Profile/Profile';
import {  useEthers } from '@usedapp/core'

export default function AccountHeader() {

    const { activateBrowserWallet, deactivate, account } = useEthers();

    const handleConnect = async event => {
		activateBrowserWallet();
	}
    return (
        
        <ProfileCard>
            {account ? (
                <>
                <ProfileIcon account={account}></ProfileIcon>
                <AccountNum >{account}</AccountNum>
                <button className="btn btn-primary mt-2 waves-effect waves-light" onClick={() => deactivate()}>Disconnect</button>
            </>
            ) : (
            <>
            <ExchangeH3>No wallet connected 😔</ExchangeH3>
            <button className="btn btn-primary mt-2 waves-effect waves-light" onClick={() => handleConnect()}>Connect</button>
            </>
            )}
        </ProfileCard>
    )
}