/* eslint-disable import/imports-first */
/* global document */

import App from './components/App';
import Home from './components/Home';
import Clients from './components/Clients';
import Cars from './components/Cars';
import AddClaim from './components/AddClaim';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="clients" component={Clients} />
      <Route path="cars" component={Cars} />
      <Route path="claim" component={AddClaim} />

    </Route>
  </Router>
  , document.getElementById('root'));
