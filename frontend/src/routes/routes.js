import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Homepage/Home';
import HomeMarket from '../pages/Homepage/HomeMarket';
import Login from '../pages/Homepage/Login';
import Register from '../pages/Homepage/Register';
// import Profile from './pages/DashboardUser/Profile';
import HomeDashboardUser from '../pages/DashboardUser/HomeDashboardUser';
import Cart from '../pages/DashboardUser/Cart';
import NotFound from '../pages/NotFound';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/mercado" component={HomeMarket} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Register} />

        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/hub" exact component={HomeDashboardUser} />
            <Route path="/hub/carrinho" exact component={Cart} />

            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
