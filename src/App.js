import AppContext from './components/AppContext';
import React, {useState, useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Profile from './pages/profile';
import VideoPage from './pages/video'

function App() {
  


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
