import React, { useState } from 'react';
import ProfileNavbar from '../ProfileNav';
import ProfileSidebar from '../ProfileSidebar';
import {
  Container,
  
} from './SigninElements';
import Exchange from '../Exchange';
import Footer from '../Footer';
const SignIn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  
  
  
  return (
    <>
    <Container>
    
    <ProfileSidebar isOpen={isOpen} toggle={toggle} />
    <ProfileNavbar toggle={toggle} />
    
      <Exchange/>
    <Footer />

      </Container>
    </>
  );
};

export default SignIn;
