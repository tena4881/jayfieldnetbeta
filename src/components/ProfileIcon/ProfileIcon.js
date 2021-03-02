import React from 'react'
import ReactDom from 'react-dom'

import { Identicon } from 'ethereum-react-components';

const PROFILE_STYLES = {
  border: '2px solid',
}



export default function ProfileIcon({account}) {
  
  return (
    <>
    <div>
        <Identicon style={PROFILE_STYLES} address={account} />
      </div>
    </>)
  
}
