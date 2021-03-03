import React from "react";
import routes from "./routes";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import ScrollToTop from './components/ScrolltoTop';

function App() {

  return (
    <React.Fragment>
      <Router>
        <ScrollToTop>
        <Switch>
        
          {routes.map((route, idx) => (
            <Route path={route.path} component={route.component} key={idx} />
          ))}
        
        </Switch>
        </ScrollToTop>
      </Router>
    </React.Fragment>
  );
}

export default App;
