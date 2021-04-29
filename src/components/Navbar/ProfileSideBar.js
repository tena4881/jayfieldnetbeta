import React,{useState, useContext} from 'react';
import { useEtherBalance, useEthers,useTokenBalance } from '@usedapp/core'
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
// import ProfileIcon from '../ProfileIcon/ProfileIcon'
import { HashLink as Link } from 'react-router-hash-link';
import { ExchangeH2, AccountNum } from '../../pages/Profile/Profile';
import { useMetamask } from "use-metamask";
//import useEthAccount from '../../blockchain/useEthAccount'

const ProfileSidebar = ({ isOpen, toggle }) => {


  const { connect, getAccounts, getChain, metaState } = useMetamask();
  const tokenAddress = '0xe5d9D8EEB5b225A465523e2065834d9EC0Ed9aB8';
  const tokenSymbol = 'JFC';
  const tokenDecimals = 2;
  const tokenImage = 'https://ipfs.fleek.co/ipfs/bafybeibigw72plrzzkg7lby2mdqkfwvwgnvohwi7ycovzsoejkr5ndhf4e';
  const { activateBrowserWallet, deactivate, account } = useEthers();
  
  

    

  /*


        <SidebarMenu >
          <SidebarRoute to='#' >COMING SOON!</SidebarRoute>
        </SidebarMenu>
*/

  return (
    
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarWrapper style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
      
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}  >        
         
          
      </div>
      <AccountNum >{account}</AccountNum>
        
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}  className="nav-button ms-auto">
                  <Link to="/" className="btn btn-primary mt-4 waves-effect waves-light">Log Out </Link>
                
        </div>
        <br></br>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}  className="nav-button ms-auto">
          
        </div>
        
        
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default ProfileSidebar;

