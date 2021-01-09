import React,{useState, useContext} from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
  LogoutBtn
} from './ProfileSidebarElements';
import TransactionsModal from '../Modal/TransactionsModal'
import ProfileIcon from '../ProfileIcon/ProfileIcon'
//import useEthAccount from '../../blockchain/useEthAccount'
import {AppContext} from '../AppContext'
import {HandleLogout} from '../../blockchain/services'

const ProfileSidebar = ({ isOpen, toggle }) => {
  
  const [isLoggedIn, setisLoggedIn] = useContext(AppContext);
  const toggleLogout = () => {
      HandleLogout();
      setisLoggedIn(false);
        
      }
  const [isTransactionsModalOpen,setisTransactionsModalOpen] = useState(false);
  //const account = useEthAccount();
  
  return (
    
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <TransactionsModal open={isTransactionsModalOpen} onClose={() => setisTransactionsModalOpen(false)}>
            Modal
          </TransactionsModal>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
        <ProfileIcon account={"000"}></ProfileIcon>
        <SidebarRoute to='#' onClick={() => setisTransactionsModalOpen(true)}>Transactions</SidebarRoute>
        </SidebarMenu>
        <SideBtnWrap>
          
          <LogoutBtn to='#' onClick={() => setisTransactionsModalOpen(true)}>Logout</LogoutBtn>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default ProfileSidebar;
