import React, { useState, useEffect, useContext } from 'react';
import { FaChevronCircleDown, FaHome,FaCog, FaHandshake } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
// import ProfileIcon from '../ProfileIcon/ProfileIcon'
import { animateScroll as scroll } from 'react-scroll';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  HomeBtnLink,
  HomeContainer,
  HomeIcon,
  NavMenu,
  LogoutBtnLink,
  NavBtn,
  NavBtnLink
} from './PNavbarElements';
const ProfileNavbar = ({ toggle }) => {
  
  const [scrollNav, setScrollNav] = useState(false);
  
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };




  return (
    <>
     
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
          <HomeContainer>
              <HomeBtnLink to='/'>
              <HomeIcon><FaHandshake size={40} style={{ color: 'black' }}/></HomeIcon>
              </HomeBtnLink>
            </HomeContainer>
            
            <MobileIcon onClick={toggle}>
              <FaCog size={26} style={{ color: 'black' }}/>
            </MobileIcon>
            
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='/'
                  duration={500}
                  exact='true'
                  offset={-80}
                >
                  
                </NavLinks>
              </NavItem>
              
            </NavMenu>
            
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default ProfileNavbar;