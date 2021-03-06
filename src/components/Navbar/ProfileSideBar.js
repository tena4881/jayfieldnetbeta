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
import { useMetamask } from "use-metamask";
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

  const { connect, getAccounts, getChain, metaState } = useMetamask();
  const tokenAddress = '0xe5d9d8eeb5b225a465523e2065834d9ec0ed9ab8';
  const tokenSymbol = 'JFC';
  const tokenDecimals = 2;
  const tokenImage = 'https://ipfs.fleek.co/ipfs/bafybeibigw72plrzzkg7lby2mdqkfwvwgnvohwi7ycovzsoejkr5ndhf4e';

  
  
  const coinAddress = "0xe5d9D8EEB5b225A465523e2065834d9EC0Ed9aB8";


    //WHAT ARE THER REWARDS FOR COMPLEATING THIS TASK
    async function addToMetamask(){
      let ethereum = window.ethereum;
      try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await ethereum.request({
          method: 'wallet_watchAsset',
          params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
              address: tokenAddress, // The address that the token is at.
              symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
              decimals: tokenDecimals, // The number of decimals in the token
              image: tokenImage, // A string url of the token logo
          },
          },
      });
      
      if (wasAdded) {
          console.log('Thanks for your interest!');
      } else {
          console.log('Your loss!');
      }
      } catch (error) {
      console.log(error);
      }
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
        <br></br>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}  className="nav-button ms-auto">
          <Link onClick={addToMetamask}>Don't see JFC in your MetaMask?</Link>
        </div>
        
        
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default ProfileSidebar;

