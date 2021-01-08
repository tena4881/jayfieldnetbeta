import React,{useState} from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './ProfileSidebarElements';
import TransactionsModal from '../Modal/TransactionsModal'
import ProfileIcon from '../ProfileIcon/ProfileIcon'

const ProfileSidebar = ({ isOpen, toggle }) => {
  const [isTransactionsModalOpen,setisTransactionsModalOpen] = useState(false);
  
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
        <ProfileIcon></ProfileIcon>
        <SidebarLink to='/'>Home</SidebarLink>
          
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute onClick={() => setisTransactionsModalOpen(true)}>Transactions</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default ProfileSidebar;
