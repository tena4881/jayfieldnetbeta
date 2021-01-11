
import {AppContext} from '../AppContext'
import React, { useState, useContext } from 'react';
import ProfileNavbar from '../ProfileNav';
import ProfileSidebar from '../ProfileSidebar';
import {Container} from '../SignIn/SigninElements';
import Exchange from '../Exchange';
import ConnectWallet from '../WalletConn';
import ProfileIcon from '../ProfileIcon/ProfileIcon';

import {
  MediaContainer,
  MediaH1,
  MediaWrapper,
  MediaCard,
  MediaIcon,
  MediaH2,
  MediaH3,
  SubtitleP,
  MediaP,
  AccountNum,
  UnStakeBtn,
  BurnBtn,
  ProfileCard,
  MediaH22,
  StakeBtn,
  ConnectBtn
} from './MediaElements';
import Lesson from '../Lesson/Lesson';


const Media = () => {
  
  const [isBuyOpen,setIsBuyOpen] = useState(false);
  const [isEditPoolOpen,setisEditPoolOpen] = useState(false);
  const [isRemovePoolOpen,setisRemovePoolOpen] = useState(false);
  const wallet = useContext(AppContext)
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen);
  }

if(wallet.isLoggedIn){
return (
  
    <MediaContainer id='Media'>
      <div id='modalPortal'></div>
      
      
     
     <ProfileCard>
    
      <ProfileIcon account={wallet.account}></ProfileIcon>
      <AccountNum>{wallet.account}</AccountNum>
      </ProfileCard>
      <MediaWrapper>
      <Lesson/>
      <MediaCard>
      
      </MediaCard>
      
      </MediaWrapper>
      
    </MediaContainer>
  );
}else{
  return (
      <>
      <Container>
      
      <Container>
        <ConnectWallet/>
        </Container>
  
        </Container>
      </>
      
    );
}
  
};

export default Media;
