import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';

import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import AddExpensePage from '../components/AddExpensePage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';


const AppRouter = ()=>(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);


export default AppRouter;