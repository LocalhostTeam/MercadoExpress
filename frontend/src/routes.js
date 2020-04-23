import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import HomeMarket from './pages/HomeMarket';
import HomeMarketUser from './pages/HomeMarketUser';
import Cart from './pages/Cart';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Logon} />
      <Route path="/cadastro" component={Register} />
      <Route path="/perfil" component={Profile} />
      <Route path="/mercado" component={HomeMarket} />
      <Route path="/home" component={HomeMarketUser} />
      <Route path="/carrinho" component={Cart} />
    </Switch>
  );
}

export default Routes;
