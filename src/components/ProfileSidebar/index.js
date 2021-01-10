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
  const wallet = useContext(AppContext);
  const toggleLogout = () => {
      HandleLogout();
      wallet.setisLoggedIn(false);
        
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
        <ProfileIcon account={wallet.account}></ProfileIcon>
        <SidebarRoute to='#' onClick={() => setisTransactionsModalOpen(true)}>Transactions</SidebarRoute>
        </SidebarMenu>
        <SideBtnWrap>
          
          <LogoutBtn to='/' onClick={toggleLogout}>Logout</LogoutBtn>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default ProfileSidebar;
