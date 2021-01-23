import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Listar from './pages/Listar';
import Pesquisar from './pages/Pesquisar';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/listar" component={Listar}/>
                <Route exact path="/pesquisar" component={Pesquisar}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;