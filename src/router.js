import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';


export default (
  <Switch>
    <Route exact path="/" component={ Homepage } />
  </Switch>
)