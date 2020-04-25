import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Homepage/Home';
import Logon from './pages/Homepage/Logon';
import Register from './pages/Homepage/Register';
import Profile from './pages/DashboardUser/Profile';
import HomeMarket from './pages/Homepage/HomeMarket';
import HomeMarketUser from './pages/DashboardUser/HomeMarketUser';
import Cart from './pages/DashboardUser/Cart';

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
