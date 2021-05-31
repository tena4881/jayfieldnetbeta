import { useEtherBalance, useEthers, useTokenBalance } from '@usedapp/core';
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import WalletContext from './wallet';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
const Landing = React.lazy(() => import('./views/pages/home'));

export default function App () {
  //Web3 Link
  const JFC = '0xe5d9D8EEB5b225A465523e2065834d9EC0Ed9aB8';
  const { activateBrowserWallet, deactivate, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const jfcBalance = useTokenBalance(JFC, account)
  return (

        <HashRouter>
            <React.Suspense fallback={loading}>
            <WalletContext.Provider value={{account,activateBrowserWallet,deactivate, etherBalance, jfcBalance}}>
                <Switch>
                  <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
                  <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
                  <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
                  <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
                  <Route exact path="/home" name="Landing" render={props => <Landing/>} />
                  <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
                </Switch>
              </WalletContext.Provider>
            </React.Suspense>
        </HashRouter>

    );

}


