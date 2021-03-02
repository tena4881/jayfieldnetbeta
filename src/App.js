import AppContext from './components/AppContext';
import React, {useState, useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Profile from './pages/profile';
import VideoPage from './pages/video'
import {useStoreApi} from './storeApi';
import {useWeb3} from './getWeb3';

function App() {
  
  const { balance, address, message, setAddress, setBalance } = useStoreApi();
  const web3 = useWeb3();
  
  const setUserAccount = async () => {
    if(window.ethereum){
      await window.ethereum.enable();
      web3.eth.getAccounts().then(accounts => {
        setAddress(accounts[0]);
        setUserBalance(accounts[0]);
      });
    }
  };

  const setUserBalance = async (fromAddress) => {
    await web3.eth.getBalance(fromAddress).then(value => {
      const credit = web3.utils.fromWei(value, 'ether');
      setBalance(credit);
    });
  };

  const sentTransaction = (e) =>  {
    e.preventDefault();
    const amount = e.target[0].value;
    const address = e.target[1].value;
    
  }


  return (
    
      <Router>
        <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/profile' component={Profile} exact />
        <Route path='/video' component={VideoPage} exact />
        </Switch>
      </Router>
      
    
  );
}

export default App;
