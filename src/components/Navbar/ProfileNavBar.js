import React, { useState, useEffect, useContext } from 'react';
import { FaChevronCircleDown, FaHome } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import ProfileIcon from '../ProfileIcon/ProfileIcon'
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
import {useStoreApi} from '../../storeApi';
const ProfileNavbar = ({ toggle }) => {
  
  const [scrollNav, setScrollNav] = useState(false);
  
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  const { balance, address, message, setAddress, setBalance } = useStoreApi();
  
  function toggleLogout() {
    console.log("Figure out how to Disconnect Metamask properly!");
    setAddress(null);
    }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);



  return (
    <>
     
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <HomeContainer>
              <HomeBtnLink to='/'
                    duration={500}
                    exact='true'
                    offset={-80}>
              <HomeIcon><FaHome style={{ color: 'black' }}/></HomeIcon>
              </HomeBtnLink>
            </HomeContainer>
            <MobileIcon onClick={toggle}>
              <FaChevronCircleDown style={{ color: 'black' }}/>
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
            <NavBtn>
              <LogoutBtnLink to="/" onClick={toggleLogout}>Log out</LogoutBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default ProfileNavbar;