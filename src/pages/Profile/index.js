import React,{useState,useContext,useEffect} from 'react';
import TradingViewWidget, { Themes, BarStyles,IntervalTypes }  from 'react-tradingview-widget';

import {
  ExchangeContainer,
  ExchangeWrapper,
  ProfileContainer,
  ExchangeCard,
  ExchangeH2,
  ExchangeH3,
  ExchangeH1,
  ExchangeP,
  AccountNum,
  ProfileCard,
  ConnectBtn,
  ChartCard,
  ExchangeH4
} from './Profile';
// import BuyModal from '../Modal/BuyModal'
// import WalletModal from '../Modal/WalletModal'
// import RemovePoolModal from '../Modal/RemovePoolModal'
// import ProfileIcon from '../ProfileIcon/ProfileIcon';\
import ConnectWallet from '../../WalletConnect';
import ProfileNavbar from '../../components/Navbar/ProfileNavBar';
import ProfileSidebar from '../../components/Navbar/ProfileSideBar';
import Footer from '../../components/Footer/footer';
import ProfileIcon from '../../components/ProfileIcon/ProfileIcon';
import {useStoreApi} from '../../storeApi';
import {useWeb3} from '../../getWeb3';
import { useMetamask } from "use-metamask";
import Balance from '../../balance'
import Account from '../../account'
const Exchange = () => {
  
  const [isBuyOpen,setIsBuyOpen] = useState(false);
  const [isEditPoolOpen,setisEditPoolOpen] = useState(false);
  const [isRemovePoolOpen,setisRemovePoolOpen] = useState(false);
  const [isWalletOpen,setisWalletOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    
  };
  
 

  const { balance, address, message, setAddress, setBalance } = useStoreApi();
  const web3 = useWeb3();

  const { connect, getAccounts, getChain, metaState } = useMetamask();


  useEffect(() => {
      if (metaState.isAvailable) {
        (async () => {
          try {
            /* you can get the information directly 
            * by assigning them to a variable, 
            * or from metaState.account and metaState.chain 
            */
            let account = await getAccounts();
            
            setAddress(account[0]);
           
          } catch (error) {
            console.log(error);
          }
        })();
      }
    }, []);

return (
  
  <ProfileContainer>
     <ProfileSidebar isOpen={isOpen} toggle={toggle} />
  	    <ProfileNavbar toggle={toggle} />
    <ExchangeContainer id='Exchange'>
      <div id='modalPortal'></div>
      
      
     
          <ProfileCard>
        <Account/>
        <ExchangeH2>Profile Overview</ExchangeH2>
      </ProfileCard>
      
      <ExchangeH4 to ='/addToWallet'>Don't see JFC in your MetaMask?</ExchangeH4>
      <ExchangeWrapper>
        
      <ExchangeCard>
        
        <ExchangeH2 >JFC Balance:</ExchangeH2>
        <ExchangeH3 style={{color: 'green'}}><Balance/> </ExchangeH3>
        
      </ExchangeCard>
      
      <ExchangeCard>
      <ExchangeH3>You have Contributed:</ExchangeH3>
        <ExchangeH2>Ξ{0}</ExchangeH2>
        
        <ExchangeH3>to the pool</ExchangeH3>

        
          <ExchangeP>
          Contribute more and earn JayField Coins!
            <br></br>
            (Coming Soon)
          </ExchangeP>
          
          
          
        </ExchangeCard>

        
      <ChartCard>
      <ExchangeH3>Price of ETH</ExchangeH3>


      <TradingViewWidget
        symbol="ETHUSD"
        theme={Themes.LIGHT}
        style='2'
        locale="fr"
        autosize
      />
          
          
        </ChartCard>
        
      
        
        
        
        
      </ExchangeWrapper>
      
    </ExchangeContainer>
    <Footer/>
    </ProfileContainer>
  );
  
  
};

export default Exchange;