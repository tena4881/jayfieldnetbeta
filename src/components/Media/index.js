
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
  BackBtn,
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
import ResponsivePlayer from '../Video/ResponsiveVidPlayer';


const Media = () => {
  
  const [isBuyOpen,setIsBuyOpen] = useState(false);
  const [isEditPoolOpen,setisEditPoolOpen] = useState(false);
  const [isRemovePoolOpen,setisRemovePoolOpen] = useState(false);
  const wallet = useContext(AppContext)
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen);
  }
const handleVideoDone = state => {
  console.log(state)
}

if(wallet.isLoggedIn){
  if(wallet.ethBalance > 0){
    return (
  
      <MediaContainer >
        
       <ProfileCard>
        
        <MediaH1>JayField/Net Media</MediaH1>
        </ProfileCard>
        <MediaWrapper>
        
        <MediaCard>
        <ResponsivePlayer 
            url="https://www.youtube.com/watch?v=Rq5SEhs9lws"
            onProgress={handleVideoDone}/>
        
          {wallet.ethBalance}
        </MediaCard>
        
        </MediaWrapper>
        
      </MediaContainer>
    );
  }else{
    return (
  
      <MediaContainer >
        
      <ProfileCard>
       
       <MediaH1>Not Enough ETH!</MediaH1>
       <MediaH3>You need 3 ETH to view this page</MediaH3>
       <MediaP>Buy some more below!</MediaP>
       </ProfileCard>
       <MediaWrapper>
       
       <MediaCard>
       <MediaH3>You only have</MediaH3>
       <MediaH2>Ξ{wallet.ethBalance}</MediaH2>
        <br></br>
        <br></br>
        <br></br>

        <StakeBtn to="#">Buy More</StakeBtn>
        <BackBtn to="#">Earn More</BackBtn>
       </MediaCard>
       
       </MediaWrapper>
       
     </MediaContainer>
    );
  }
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
