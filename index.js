import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

// Pages
import Home from './Home';

import Welcome from './pages/Welcome';
import Enjoy from './pages/Enjoy';
import Settings from './pages/Settings';
import Disconnect from './pages/Disconnect';
import Clock from './pages/Clock/Clock';
import ClockAdd from './pages/Clock/ClockAdd';

import './index.css';
import './lib.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/welcome" component={Welcome}/>
    <Route path="/enjoy" component={Enjoy}/>
    <Route path="/settings" component={Settings}/>
    <Route path="/disconnect" component={Disconnect}/>
    <Route path="/clock" component={Clock}/>
        <Route path="/clock/add" component={ClockAdd}/>
 </Router>
), document.getElementById('page'))