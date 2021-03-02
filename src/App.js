import React from "react";
import routes from "./routes";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
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
    <React.Fragment>
      <Router>
        <Switch>
          {routes.map((route, idx) => (
            <Route path={route.path} component={route.component} key={idx} />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
