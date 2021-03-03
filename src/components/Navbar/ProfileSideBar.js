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
import {useStoreApi} from '../../storeApi';
import ProfileIcon from '../ProfileIcon/ProfileIcon'
//import useEthAccount from '../../blockchain/useEthAccount'

const ProfileSidebar = ({ isOpen, toggle }) => {
  const { balance, address, message, setAddress, setBalance } = useStoreApi();
  /**
 * Disconnect wallet button pressed.
 */
  function toggleLogout() {
      console.log("Figure out how to Disconnect Metamask properly!");
      setAddress(null);
      }
  //const [isTransactionsModalOpen,setisTransactionsModalOpen] = useState(false);
  //const account = useEthAccount();
  
  return (
    
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
     
      
      <SidebarWrapper>
        <SidebarMenu>
        <ProfileIcon account={address}></ProfileIcon>
        <br>
        </br>
        <SidebarRoute to='#' >COMING SOON!</SidebarRoute>
        </SidebarMenu>
        <SideBtnWrap>
        <LogoutBtn to="/" onClick={toggleLogout}>Log out</LogoutBtn>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default ProfileSidebar;

