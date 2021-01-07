import React, {useState, useEffect} from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Profile from './pages/profile';

function App() {
  

  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/profile' component={Profile} exact />
      </Switch>
    </Router>
  );
}

export default App;
