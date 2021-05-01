import React from "react";
import routes from "./routes";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import UserContext from './components/User/user';
import { useEtherBalance, useEthers, useTokenBalance } from '@usedapp/core'

function App() {
  const { activateBrowserWallet,deactivate,account} = useEthers();
  const user = {
    account: {account},
    activate: {activateBrowserWallet},
    deactivate: {deactivate},
  }
  return (
      <React.Fragment>
        <UserContext.Provider value={user}>
          <Router>
              <Switch>
                  {routes.map((route, idx) => (
                    <Route path={route.path} component={route.component} key={idx} />
                  ))}
              </Switch>
          </Router>
        </UserContext.Provider>
      </React.Fragment>
  );
}

export default App;
