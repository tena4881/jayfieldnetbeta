
import {AppContext, AppContextProvider} from '../AppContext'
import React, { useState, useContext } from 'react';
import ProfileNavbar from '../ProfileNav';
import ProfileSidebar from '../ProfileSidebar';
import {Container} from './SigninElements';
import Exchange from '../Exchange';
import ConnectWallet from '../WalletConn';

const SignIn = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn] = useContext(AppContext);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  if(!isLoggedIn){
    return (
      <>
      <Container>
      
      <ProfileNavbar />
      
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

export default SignIn;
