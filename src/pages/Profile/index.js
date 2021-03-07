import React,{useState,useContext,useEffect} from 'react';
import TradingViewWidget, { Themes, BarStyles,IntervalTypes }  from 'react-tradingview-widget';
import TransferToVault from '../../transferToVault';
import   ContributeToVault from '../../contributeToVault';
import { Link } from "react-router-dom";
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
  ExchangeH2W,
  ExchangeH3W,
  BalanceCard,
  ExchangePW,
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
        <ExchangeH3>Profile Overview</ExchangeH3>
      </ProfileCard>
      
      
      
      <ExchangeWrapper>
        
      <BalanceCard>
        <ExchangeH2W >JFC Balance:</ExchangeH2W>
        <ExchangeH3 style={{color: 'white'}}><Balance/> </ExchangeH3>
      </BalanceCard>
      <ExchangeCard>
        <ExchangeH3W >Contribute your ETH</ExchangeH3W>
        
        <ExchangePW>
          Available to contribute:
        </ExchangePW>
        <ExchangeH2W>Ξ{0}</ExchangeH2W>
        <ContributeToVault/>
        <ExchangePW>
          (Select amount)
        </ExchangePW>
      </ExchangeCard>

      <ExchangeCard>
        <ExchangeH3W>You have contributed:</ExchangeH3W>
        <ExchangeH2W>Ξ{0}</ExchangeH2W>
        <ExchangeH3W>to JayField Net</ExchangeH3W>
        
        
        
        
      </ExchangeCard>

      
      <ChartCard>
        <ExchangeH3W>Price of ETH</ExchangeH3W>
        <TradingViewWidget
          symbol="ETHUSD"
          theme={Themes.DARK}
          style='2'
          locale="fr"
          autosize
        />
      </ChartCard>
       
       
      


      </ExchangeWrapper>
      <Link onClick={addToMetamask}>Don't see JFC in your MetaMask?</Link>
    </ExchangeContainer>
    
    <Footer/>
    </ProfileContainer>
  );
  
  
};

export default Exchange;