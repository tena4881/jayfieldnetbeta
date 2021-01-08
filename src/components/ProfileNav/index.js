import React, { useState, useEffect } from 'react';
import { FaEllipsisV, FaHome } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
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
  NavBtn,
  NavBtnLink
} from './PNavbarElements';
import '../../App.css';
import TransactionsModal from '../Modal/TransactionsModal'
const ProfileNavbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isTransactionsModalOpen,setisTransactionsModalOpen] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  
  

  return (
    <>
     <TransactionsModal open={isTransactionsModalOpen} onClose={() => setisTransactionsModalOpen(false)}>
            Modal
          </TransactionsModal>
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
              <FaEllipsisV style={{ color: 'black' }}/>
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
              <NavBtnLink to="#" onClick={() => setisTransactionsModalOpen(true)}>Transaction</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default ProfileNavbar;
