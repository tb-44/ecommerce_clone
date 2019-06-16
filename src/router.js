import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import ProductsByGender from './components/ProductsByGender/ProductsByGender';
import Backpacks from './components/Backpacks/Backpacks';
import ProductsByCategory from './components/ProductsByCategory/ProductsByCategory';
import DetailedView from './components/DetailedView/DetailedView';
import Cart from './components/Cart/Cart';

export default (
  <Switch>
    <Route exact path="/" component={ Homepage } />
    <Route exact path="/shop/:gender" component={ ProductsByGender } />
    <Route exact path="/shop/:gender/:category" component={ ProductsByCategory } />
    <Route path="/backpacks" component={ Backpacks } />
    <Route path="/product/:product_id" component={ DetailedView } />
    <Route path="/cart" component={ Cart } />
  </Switch>
)