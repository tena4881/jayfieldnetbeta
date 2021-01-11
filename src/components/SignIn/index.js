
import {AppContext} from '../AppContext'
import React, { useState, useContext } from 'react';
import ProfileNavbar from '../ProfileNav';
import ProfileSidebar from '../ProfileSidebar';
import {Container} from './SigninElements';
import Exchange from '../Exchange';
import ConnectWallet from '../WalletConn';
const ProfilePage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const wallet = useContext(AppContext)
  //const [isLoggedIn, setisLoggedIn] = useContext(AppContext);
  const toggle = () => {
    setIsOpen(!isOpen);
    
  };

  if(!wallet.isLoggedIn){
    return (
      <>
      <Container>
        <ConnectWallet/>
        </Container>
      </>
    );
  }else{
    return (
      <>
      <Container>
      <ProfileSidebar isOpen={isOpen} toggle={toggle} />
      <ProfileNavbar toggle={toggle} />
      
        <Exchange/>
  
        </Container>
      </>
      
    );
  }
  
  
  
};

export default ProfilePage;
