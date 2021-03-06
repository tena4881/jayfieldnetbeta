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
import { HashLink as Link } from 'react-router-hash-link';
import { ExchangeH2, AccountNum } from '../../pages/Profile/Profile';
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
  /*


        <SidebarMenu >
          <SidebarRoute to='#' >COMING SOON!</SidebarRoute>
        </SidebarMenu>
*/

  return (
    
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarWrapper style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
      
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}  >        
          <ProfileIcon account={address}></ProfileIcon>
          
      </div>
      <AccountNum >{address}</AccountNum>
        
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}  className="nav-button ms-auto">
                  <Link to="/profile" className="btn btn-primary mt-4 waves-effect waves-light">Log Out </Link>
        </div>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default ProfileSidebar;

