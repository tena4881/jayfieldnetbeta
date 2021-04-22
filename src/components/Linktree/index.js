import React from 'react';
import { Container } from './styles';
import Button from './Button';
import variables from './variables';
import Header from './Header';

const facebookLogo = require('./images/facebook.svg');
const githubLogo = require('./images/github.svg');
const youtubeLogo = require('./images/youtube.svg');
const instagramLogo = require('./images/instagram.svg');
const linkedinLogo = require('./images/linkedin-in.svg');
const reactLogo = require('./images/react.svg');
const twitterLogo = require('./images/twitter.svg');
const whatsappLogo = require('./images/whatsapp.svg');

export default function LinkTree() {
  return (
    <Container>
      <Header picture='https://jayfieldnet.io/assets/images/smaller_logo.png' title='JayField Consulting' subtitle='Connect with us!' />
      <Button link='https://www.facebook.com/JayFieldLLC/' icon={facebookLogo} name='Facebook' backgroundColor={variables.facebookColor} />
      <Button link='https://www.instagram.com/jayfieldusa/' icon={instagramLogo} name='Instagram' backgroundColor={variables.instagramColor} />
      
      <Button link='https://discord.gg/76tfc6VbqN' icon={githubLogo} name='Discord' backgroundColor={variables.discordColor} />
      
      
      <Button link='https://www.linkedin.com/in/danielgomesp/' icon={linkedinLogo} name='LinkedIn' backgroundColor={variables.linkedinColor} />
      <Button link='https://twitter.com/jayfieldllc' icon={twitterLogo} name='Twitter' backgroundColor={variables.twitterColor} />
      <Button link='https://jayfieldnet.io' icon={twitterLogo} name='Website' backgroundColor={variables.siteColor} />
    </Container>
  )
}