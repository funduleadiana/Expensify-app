import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';

import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import ItemOne from '../components/ItemOne';


const AppRouter = ()=>(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
               <Route path="/" component={Home} exact/>
               <Route path="/portfolio" component={Portfolio} exact/>
               <Route path="/portfolio/:id" component={ItemOne}/>
               <Route path="/contact" component={Contact}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);


export default AppRouter;