import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import {StoreProvider} from './store';
import ScrollToTop from './components/ScrolltoTop';

import  { MetamaskStateProvider } from "use-metamask";
const app = (
  <BrowserRouter>
    <StoreProvider>
      <ScrollToTop>
        <MetamaskStateProvider>
          <App />
        </MetamaskStateProvider>
      </ScrollToTop> 
    </StoreProvider>
  </BrowserRouter>
);
ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
