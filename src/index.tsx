import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChainId, DAppProvider } from '@usedapp/core'
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/ScrolltoTop';


const config = {
  readOnlyChainId: ChainId.Mainnet,

}

const app = (
  
  <BrowserRouter>
    <DAppProvider config={config}>
        <App />
    </DAppProvider>
  </BrowserRouter>
  
);
ReactDOM.render(app, document.getElementById("root"));
