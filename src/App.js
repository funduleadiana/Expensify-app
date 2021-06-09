import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';


const ExpenseDashboardPage=()=>(
    <div>
        This is my dashboard component
    </div>
);

const AddExpensePage =()=>(
    <div>
        This is my add expense page
    </div>
);

const EditPage = ()=>(
    <div>
        This is the page I edit on
    </div>
);

const HelpPage=()=>(
    <div>
        This is the page you will find help for all your queries.
    </div>
);

const NotFoundPage=()=>(
    <div>
        404 Error Page not found! <Link to="/">Go Home</Link>
    </div>
)
const routes = (
    <BrowserRouter>
    <Switch>
    <Route path="/" component={ExpenseDashboardPage} exact/>
    <Route path="/create" component={AddExpensePage} />
    <Route path="/edit" component={EditPage} />
    <Route path="/help" component={HelpPage} />
    <Route component={NotFoundPage}/>
    </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'))