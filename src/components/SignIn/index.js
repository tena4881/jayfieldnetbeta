import React, { useState } from 'react';
import ProfileNavbar from '../ProfileNav';
import ProfileSidebar from '../ProfileSidebar';
import {
  Container,
  Form,
  
} from './SigninElements';
import {
  ChakraProvider,
  Stack,
  Avatar,
  Input,
  Grid,
  Box,
  Badge,
  Image,
  Flex,
  Tag,
  Text,
  Button,
} from '@chakra-ui/react';
import Web3 from 'web3';
import Exchange from '../Exchange';
import Footer from '../Footer';


const SignIn = () => {
  const [isOpen, setIsOpen] = useState(false);

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
