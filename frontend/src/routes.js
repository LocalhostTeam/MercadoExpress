import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Logon from './Pages/Logon';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import HomeMarket from './Pages/HomeMarket';
import HomeMarketUser from './Pages/HomeMarketUser';
import Cart from './Pages/Cart';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Logon} />
                <Route path="/cadastro" component={Register} />
                <Route path="/perfil" component={Profile} />
                <Route path="/mercado" component={HomeMarket} />
                <Route path="/home" component={HomeMarketUser} />
                <Route path="/carrinho" component={Cart} />
            </Switch>
        </BrowserRouter>
    );
}
