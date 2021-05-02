import React from 'react';
import { Container } from './styles';
import Button from './Button';
import variables from './variables';
import Header from './Header';
import { ExchangeH3,ExchangeH4, ProfileCard } from '../../pages/Profile/Profile';

import facebookLogo from './images/facebook.svg'
import githubLogo from './images/github.svg'
import youtubeLogo from './images/youtube.svg'
import instagramLogo from './images/instagram.svg'
import linkedinLogo from './images/linkedin-in.svg'
import reactLogo from './images/react.svg'
import twitterLogo from './images/twitter.svg'
import whatsappLogo from './images/whatsapp.svg'
export default function LinkTree() {
  return (
    <>
    <ProfileCard>
      <ExchangeH3>Our Brain Begins Here</ExchangeH3>
      <ExchangeH4>Connect with us</ExchangeH4>
      <Button link='https://www.facebook.com/JayFieldLLC/' icon={facebookLogo} name='Facebook' backgroundColor={variables.facebookColor} />
      <Button link='https://www.instagram.com/jayfieldusa/' icon={instagramLogo} name='Instagram' backgroundColor={variables.instagramColor} />
      
      <Button link='https://discord.gg/76tfc6VbqN' icon={githubLogo} name='Discord' backgroundColor={variables.discordColor} />
      
      
      <Button link='https://www.linkedin.com/in/danielgomesp/' icon={linkedinLogo} name='LinkedIn' backgroundColor={variables.linkedinColor} />
      <Button link='https://twitter.com/jayfieldllc' icon={twitterLogo} name='Twitter' backgroundColor={variables.twitterColor} />
      
    </ProfileCard>
   
  </>
  )
}