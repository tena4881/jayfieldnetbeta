import React,{useState,useContext} from 'react';
import TradingViewWidget, { Themes, BarStyles,IntervalTypes }  from 'react-tradingview-widget';

import {
  ExchangeContainer,
  ExchangeWrapper,
  ProfileContainer,
  ExchangeCard,
  ExchangeH2,
  ExchangeH3,
  ExchangeP,
  AccountNum,
  ProfileCard,
  ChartCard,
} from './Profile';
// import BuyModal from '../Modal/BuyModal'
// import WalletModal from '../Modal/WalletModal'
// import RemovePoolModal from '../Modal/RemovePoolModal'
// import ProfileIcon from '../ProfileIcon/ProfileIcon';
import {useStoreApi} from '../../storeApi';
import ConnectWallet from '../../WalletConnect';
import Footer from '../../components/Footer/footer';

const Exchange = () => {
  
  const [isBuyOpen,setIsBuyOpen] = useState(false);
  const [isEditPoolOpen,setisEditPoolOpen] = useState(false);
  const [isRemovePoolOpen,setisRemovePoolOpen] = useState(false);
  const [isWalletOpen,setisWalletOpen] = useState(false);
  const { balance, address, message, setAddress, setBalance } = useStoreApi();
 if(address == null){
  return(
    <ConnectWallet></ConnectWallet>
  )
 }
  
return (
  <ProfileContainer>
    <ExchangeContainer id='Exchange'>
      <div id='modalPortal'></div>
      
      
     
          <ProfileCard>
    
      
      <AccountNum>{address}</AccountNum>
      </ProfileCard>
      <ExchangeH3>Profile Overview</ExchangeH3>
      <ExchangeWrapper>
        
      <ExchangeCard>
        <ExchangeH2>{balance} JFC</ExchangeH2>
        <br></br>
        <br></br>
        <br></br>
        
        
        
      </ExchangeCard>
      
      <ExchangeCard>
      <ExchangeH3>You have Contributed</ExchangeH3>
        <ExchangeH2>Ξ{0}</ExchangeH2>
        
        <ExchangeH3>in the pool</ExchangeH3>

          
          <ExchangeP>
            Earn JayField Coins!
            <br></br>
            Coming Soon!
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
