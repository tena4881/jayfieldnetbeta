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
import useEthAccount from '../../blockchain/useEthAccount'

const ProfileSidebar = ({ isOpen, toggle }) => {
  const [isTransactionsModalOpen,setisTransactionsModalOpen] = useState(false);
  const account = useEthAccount();
  
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
        <ProfileIcon account={account}></ProfileIcon>
        <SidebarLink to='/profile'>Menu Item TBD</SidebarLink>
          
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='#' onClick={() => setisTransactionsModalOpen(true)}>Transactions</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default ProfileSidebar;
