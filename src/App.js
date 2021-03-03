import React from "react";
import routes from "./routes";
import { Route, Switch, HashRouter as Router } from "react-router-dom";


function App() {

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
